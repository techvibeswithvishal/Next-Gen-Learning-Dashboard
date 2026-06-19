# Next-Gen Learning Dashboard

A futuristic, high-performance Student Learning Dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Project Overview

This project was developed as part of the Frontend Intern Challenge.

The goal is to create a premium educational dashboard that demonstrates:

* Modern UI/UX design
* Server-side data fetching
* Smooth animations
* Responsive layouts
* Component-based architecture
* Supabase database integration

The dashboard fetches course data from Supabase and displays it in a Bento Grid layout with animated interactions.

---

## Features

### Dashboard Layout

* Dark mode UI
* Bento Grid design
* Responsive sidebar navigation
* Mobile bottom navigation
* Hero greeting section
* Dynamic course cards
* Learning activity section

### Supabase Integration

Course information is stored in a Supabase PostgreSQL database.

Data fetched includes:

* Course title
* Learning progress
* Course icon
* Creation timestamp

The application retrieves this data using Next.js Server Components.

### Animations

Implemented using Framer Motion:

* Staggered page entrance animations
* Animated progress bars
* Hover elevation effects
* Spring-based interactions
* Sidebar active-state transitions

### Responsive Design

Desktop:

* Full sidebar
* Multi-column Bento Grid

Tablet:

* Collapsible sidebar
* Two-column layout

Mobile:

* Bottom navigation
* Single-column layout

---

## Technology Stack

### Frontend

* Next.js 16 (App Router)
* React
* TypeScript
* Tailwind CSS

### Backend

* Supabase PostgreSQL

### Animation

* Framer Motion

### Icons

* Lucide React

---

## Project Structure

frontend/

├── app/

│ ├── page.tsx

│ ├── loading.tsx

│ ├── error.tsx

│ ├── analytics/page.tsx

│ ├── courses/page.tsx

│ ├── settings/page.tsx

│ └── layout.tsx

│

├── components/

│ ├── dashboard/

│ ├── navigation/

│ ├── animations/

│ └── skeletons/

│

├── lib/

│ ├── supabase.ts

│ ├── queries.ts

│ └── iconMap.ts

│

├── constants/

├── types/

├── public/

├── .env.example

└── README.md

---

## Database Schema

Table Name: courses

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null,
  icon_name text not null,
  created_at timestamp default now()
);
```

### Sample Data

```sql
insert into courses
(title, progress, icon_name)
values
('Advanced React Patterns',75,'Code2'),
('Next.js Mastery',90,'Rocket'),
('Machine Learning Basics',55,'Brain'),
('Data Structures',68,'Database');
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Example environment file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Save the above as `.env.example`.

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application runs at:

```txt
http://localhost:3000
```

---

## How Supabase Works in This Project

1. Course data is stored in Supabase.
2. Next.js Server Components fetch data from the database.
3. Data is passed into reusable React components.
4. Components render dynamic course cards.
5. Progress bars animate using the values stored in the database.

This demonstrates real-world backend integration instead of hardcoded frontend data.

---

## Architectural Decisions

### Why Server Components?

Server Components:

* Improve performance
* Reduce client-side JavaScript
* Keep database operations secure
* Enable efficient data fetching

### Why Supabase?

Supabase provides:

* PostgreSQL database
* Easy setup
* Secure API access
* Production-ready backend services

### Why Framer Motion?

Framer Motion enables:

* Hardware-accelerated animations
* Smooth interactions
* Spring-based motion
* Layout animations

---

## Assignment Requirements Covered

* Next.js App Router
* Supabase Integration
* Server Component Data Fetching
* Tailwind CSS
* Framer Motion
* Loading Skeletons
* Error Handling
* Bento Grid Layout
* Responsive Design
* Dynamic Course Cards
* Animated Progress Bars
* Sidebar Navigation
* TypeScript Interfaces
* Reusable Components

---

## Future Improvements

* Authentication
* User Profiles
* Course Enrollment
* Real Analytics Data
* Learning Streak Tracking
* Course Management System
* Dashboard Personalization

---

## Author

Vishal Singh

B.Tech Computer Science & Engineering

Frontend Intern Challenge Submission
