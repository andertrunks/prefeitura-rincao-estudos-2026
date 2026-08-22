-- Estrutura inicial aplicada ao projeto remoto com esta versão de migração.
create table public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  active_cargo_id text not null default 'monitor' check (active_cargo_id in ('monitor', 'agente', 'ajudante')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.user_cargos (
  user_id uuid not null references auth.users(id) on delete cascade,
  cargo_id text not null check (cargo_id in ('monitor', 'agente', 'ajudante')),
  created_at timestamptz not null default now(),
  primary key (user_id, cargo_id)
);

create table public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  cargo_id text not null check (cargo_id in ('monitor', 'agente', 'ajudante')),
  completed boolean not null default false,
  progress smallint not null default 0 check (progress between 0 and 100),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id, cargo_id)
);

create table public.question_attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  id text not null,
  question_id text not null,
  cargo_id text not null check (cargo_id in ('monitor', 'agente', 'ajudante')),
  selected_option smallint not null check (selected_option between -1 and 4),
  correct boolean not null,
  answered_at timestamptz not null,
  simulation_id text,
  sync_source_id text not null,
  primary key (user_id, id),
  unique (user_id, sync_source_id)
);

create table public.favorites (
  user_id uuid not null references auth.users(id) on delete cascade,
  entity_type text not null check (entity_type in ('lesson', 'question')),
  entity_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, entity_type, entity_id)
);

create table public.review_queue (
  user_id uuid not null references auth.users(id) on delete cascade,
  cargo_id text not null check (cargo_id in ('monitor', 'agente', 'ajudante')),
  topic_id text not null,
  question_id text,
  due_at timestamptz not null,
  interval_days smallint not null check (interval_days in (1, 7, 15, 30)),
  status text not null default 'pending' check (status in ('pending', 'completed', 'dismissed')),
  updated_at timestamptz not null default now(),
  primary key (user_id, cargo_id, topic_id)
);

create table public.simulation_attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  id text not null,
  cargo_id text not null check (cargo_id in ('monitor', 'agente', 'ajudante')),
  mode text not null check (mode in ('estudo', 'prova')),
  started_at timestamptz not null,
  finished_at timestamptz not null,
  total_questions smallint not null check (total_questions >= 0),
  correct_answers smallint not null check (correct_answers >= 0 and correct_answers <= total_questions),
  score numeric(5, 2) not null check (score between 0 and 100),
  elapsed_seconds integer not null default 0 check (elapsed_seconds >= 0),
  question_ids text[] not null default '{}',
  answer_ids text[] not null default '{}',
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);

create table public.study_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  study_seconds bigint not null default 0 check (study_seconds >= 0),
  updated_at timestamptz not null default now()
);

create index question_attempts_user_question_answered_idx
  on public.question_attempts (user_id, question_id, answered_at desc);
create index lesson_progress_user_cargo_completed_idx
  on public.lesson_progress (user_id, cargo_id, completed);
create index review_queue_user_status_due_idx
  on public.review_queue (user_id, status, due_at);
create index simulation_attempts_user_cargo_finished_idx
  on public.simulation_attempts (user_id, cargo_id, finished_at desc);

alter table public.profiles enable row level security;
alter table public.profiles force row level security;
alter table public.user_cargos enable row level security;
alter table public.user_cargos force row level security;
alter table public.lesson_progress enable row level security;
alter table public.lesson_progress force row level security;
alter table public.question_attempts enable row level security;
alter table public.question_attempts force row level security;
alter table public.favorites enable row level security;
alter table public.favorites force row level security;
alter table public.review_queue enable row level security;
alter table public.review_queue force row level security;
alter table public.simulation_attempts enable row level security;
alter table public.simulation_attempts force row level security;
alter table public.study_progress enable row level security;
alter table public.study_progress force row level security;

revoke all on table public.profiles, public.user_cargos, public.lesson_progress,
  public.question_attempts, public.favorites, public.review_queue,
  public.simulation_attempts, public.study_progress from anon;
grant usage on schema public to authenticated;
grant select, insert, update, delete on table public.profiles, public.user_cargos,
  public.lesson_progress, public.question_attempts, public.favorites,
  public.review_queue, public.simulation_attempts, public.study_progress to authenticated;

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'profiles', 'user_cargos', 'lesson_progress', 'question_attempts',
    'favorites', 'review_queue', 'simulation_attempts', 'study_progress'
  ]
  loop
    execute format(
      'create policy %I on public.%I for select to authenticated using ((select auth.uid()) = user_id)',
      table_name || '_select_own', table_name
    );
    execute format(
      'create policy %I on public.%I for insert to authenticated with check ((select auth.uid()) = user_id)',
      table_name || '_insert_own', table_name
    );
    execute format(
      'create policy %I on public.%I for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)',
      table_name || '_update_own', table_name
    );
    execute format(
      'create policy %I on public.%I for delete to authenticated using ((select auth.uid()) = user_id)',
      table_name || '_delete_own', table_name
    );
  end loop;
end
$$;
