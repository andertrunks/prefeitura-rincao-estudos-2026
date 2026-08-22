-- Segunda barreira contra sincronizações fora de ordem entre dispositivos.
create function public.keep_newest_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.updated_at < old.updated_at then
    return old;
  end if;
  return new;
end;
$$;

revoke all on function public.keep_newest_updated_at() from public, anon, authenticated;

create trigger profiles_keep_newest
before update on public.profiles
for each row execute function public.keep_newest_updated_at();

create trigger lesson_progress_keep_newest
before update on public.lesson_progress
for each row execute function public.keep_newest_updated_at();

create trigger review_queue_keep_newest
before update on public.review_queue
for each row execute function public.keep_newest_updated_at();

create trigger simulation_attempts_keep_newest
before update on public.simulation_attempts
for each row execute function public.keep_newest_updated_at();

create trigger study_progress_keep_newest
before update on public.study_progress
for each row execute function public.keep_newest_updated_at();
