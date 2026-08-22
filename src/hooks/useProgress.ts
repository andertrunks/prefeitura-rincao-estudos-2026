import { useCallback, useEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import { useAuth } from '../auth/useAuth'
import { supabase } from '../lib/supabase'
import { syncUserProgress } from '../services/cloudSync'
import {
  clearSyncPending,
  completeGuestImport,
  createDefaultUserData,
  hasPendingSync,
  loadUserData,
  markSyncPending,
  saveUserData,
  touchUserData,
} from '../storage'
import type { StorageNamespace, SyncStatus, UserData } from '../types'

export function useProgress() {
  const { configured, user } = useAuth()
  const userId = user?.id
  const namespace = useMemo<StorageNamespace>(() => userId ? `user:${userId}` : 'guest', [userId])
  const [data, setStoredData] = useState<UserData>(() => createDefaultUserData())
  const [ready, setReady] = useState(false)
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(configured ? 'local' : 'unavailable')
  const [syncMessage, setSyncMessage] = useState('')
  const loadedNamespace = useRef<StorageNamespace | null>(null)
  const dataRef = useRef(data)
  const syncing = useRef<Promise<UserData | null> | null>(null)
  const lastSynced = useRef('')
  dataRef.current = data

  useEffect(() => {
    let active = true
    setReady(false)
    loadedNamespace.current = null
    lastSynced.current = ''
    setStoredData(createDefaultUserData())
    void loadUserData(namespace).then((loaded) => {
      if (!active) return
      setStoredData(loaded)
      loadedNamespace.current = namespace
      setReady(true)
      if (!userId) setSyncStatus(configured ? 'local' : 'unavailable')
    })
    return () => { active = false }
  }, [configured, namespace, userId])

  const syncNow = useCallback(async (override?: UserData) => {
    if (!configured || !supabase || !userId || !ready || loadedNamespace.current !== namespace) {
      setSyncStatus(configured ? 'local' : 'unavailable')
      return null
    }
    if (!navigator.onLine) {
      markSyncPending(namespace)
      setSyncStatus('pending')
      setSyncMessage('Seu progresso está salvo neste dispositivo e será sincronizado quando a conexão voltar.')
      return null
    }
    if (syncing.current) return syncing.current

    const snapshot = override ?? dataRef.current
    setSyncStatus('syncing')
    setSyncMessage('Sincronizando seu progresso...')
    const operation = syncUserProgress(supabase, userId, snapshot)
      .then(async (merged) => {
        lastSynced.current = JSON.stringify(merged)
        setStoredData(merged)
        await saveUserData(namespace, merged)
        clearSyncPending(namespace)
        completeGuestImport(userId)
        setSyncStatus('synced')
        setSyncMessage('Progresso sincronizado.')
        return merged
      })
      .catch(() => {
        markSyncPending(namespace)
        setSyncStatus('error')
        setSyncMessage('Seu progresso está salvo neste dispositivo e será sincronizado quando a conexão voltar.')
        return null
      })
      .finally(() => { syncing.current = null })
    syncing.current = operation
    return operation
  }, [configured, namespace, ready, userId])

  useEffect(() => {
    if (!ready || loadedNamespace.current !== namespace) return
    void saveUserData(namespace, data)
    if (!userId) {
      setSyncStatus(configured ? 'local' : 'unavailable')
      setSyncMessage('Seu progresso está salvo neste dispositivo.')
      return
    }
    if (JSON.stringify(data) === lastSynced.current) return
    markSyncPending(namespace)
    setSyncStatus('pending')
    setSyncMessage('Sincronização pendente.')
    const timer = window.setTimeout(() => { void syncNow() }, 1200)
    return () => window.clearTimeout(timer)
  }, [configured, data, namespace, ready, syncNow, userId])

  useEffect(() => {
    const online = () => {
      if (userId && hasPendingSync(namespace)) void syncNow()
    }
    const offline = () => {
      if (userId) {
        setSyncStatus('pending')
        setSyncMessage('Seu progresso está salvo neste dispositivo e será sincronizado quando a conexão voltar.')
      }
    }
    window.addEventListener('online', online)
    window.addEventListener('offline', offline)
    return () => {
      window.removeEventListener('online', online)
      window.removeEventListener('offline', offline)
    }
  }, [namespace, syncNow, userId])

  const setData = useCallback<Dispatch<SetStateAction<UserData>>>((action) => {
    setStoredData((current) => {
      const next = typeof action === 'function' ? action(current) : action
      return touchUserData(next, next.selectedCargo, current.updatedAt)
    })
  }, [])

  return {
    data,
    namespace,
    ready,
    setData,
    syncMessage,
    syncNow,
    syncStatus,
  }
}
