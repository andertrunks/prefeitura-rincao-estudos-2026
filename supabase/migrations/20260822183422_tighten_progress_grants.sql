-- Restringe grants padrão do Data API ao conjunto mínimo usado pelo cliente.
revoke all on table public.profiles, public.user_cargos, public.lesson_progress,
  public.question_attempts, public.favorites, public.review_queue,
  public.simulation_attempts, public.study_progress from authenticated;

grant select, insert, update, delete on table public.profiles, public.user_cargos,
  public.lesson_progress, public.question_attempts, public.favorites,
  public.review_queue, public.simulation_attempts, public.study_progress to authenticated;
