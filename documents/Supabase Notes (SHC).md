## Supabase Notes (SHC) setup to test from scratch (no profiles; no users)

https://supabase.com/dashboard/org/tcblamamznkbxrqcrmru

Useful bits:
```sql
DELETE FROM public.profiles;

DELETE FROM auth.users;

SELECT COUNT(*) FROM auth.users;

SELECT COUNT(*) FROM public.profiles;
```



