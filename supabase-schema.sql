-- ============================================================
-- GymDesk — Supabase schema
-- Is poori file ko Supabase dashboard ke "SQL Editor" mein paste
-- karke "Run" karo. Ek hi baar chalana hai.
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  photo_url text,
  plan_type text not null default 'monthly',
  plan_amount numeric not null default 0,
  plan_start date not null,
  plan_end date not null,
  frozen boolean not null default false,
  emergency_contact text,
  created_at timestamptz not null default now()
);

-- Agar table pehle se bani hui hai to ye line chalayein:
alter table members add column if not exists photo_url text;


create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete set null,
  member_name text not null,
  amount numeric not null,
  date date not null,
  method text not null default 'Cash',
  note text,
  created_at timestamptz not null default now()
);

create table if not exists attendance (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete cascade,
  member_name text not null,
  date date not null,
  time text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_payments_date on payments(date desc);
create index if not exists idx_attendance_date on attendance(date desc);
create index if not exists idx_attendance_member on attendance(member_id);

-- ------------------------------------------------------------
-- Row Level Security (RLS)
-- Abhi ke liye "allow all" — matlab jiske paas bhi tumhara
-- Project URL + anon key hai wo data padh/likh sakta hai.
-- Ye local development/testing ke liye theek hai.
-- Jab tum login/authentication add karoge (real users ke liye),
-- in policies ko zaroor tighten karna — abhi ke liye ye sirf
-- app ko turant kaam karne layak banane ke liye hai.
-- ------------------------------------------------------------
alter table members enable row level security;
alter table payments enable row level security;
alter table attendance enable row level security;

create policy "Allow all - members" on members for all using (true) with check (true);
create policy "Allow all - payments" on payments for all using (true) with check (true);
create policy "Allow all - attendance" on attendance for all using (true) with check (true);

-- ------------------------------------------------------------
-- Admin Login Table (Thakur Gym Portal)
-- In future, agar username ya password change karna ho,
-- Supabase Dashboard mein jaakar "Table Editor" -> "admin_users"
-- table mein username ya password direct edit kar sakte hain!
-- ------------------------------------------------------------
create table if not exists admin_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password text not null,
  created_at timestamptz not null default now()
);

alter table admin_users enable row level security;
create policy "Allow all - admin_users" on admin_users for all using (true) with check (true);

-- Initial Login Credentials (thakurgym / dinesh3151)
insert into admin_users (username, password)
values ('thakurgym', 'dinesh3151')
on conflict (username) do update set password = excluded.password;

-- ============================================================
-- OPTIONAL: sample/test data
-- In INSERT statements ke aage se "--" hataake run karo agar
-- kuch demo members ke saath app try karna chahte ho.
-- ============================================================

-- insert into members (name, phone, plan_type, plan_amount, plan_start, plan_end, frozen) values
--   ('Rohan Mehta',    '9820011122', 'monthly',   1500,  current_date - 12,  current_date + 18, false),
--   ('Priya Sharma',   '9820033344', 'quarterly', 4000,  current_date - 86,  current_date + 4,  false),
--   ('Amit Verma',     '9820055566', 'monthly',   1500,  current_date - 36,  current_date - 6,  false),
--   ('Sneha Iyer',     '9820077788', 'yearly',    14000, current_date - 165, current_date + 200, false);
