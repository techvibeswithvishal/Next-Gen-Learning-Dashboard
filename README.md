# Next-Gen Learning Dashboard

A modern Student Learning Dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

This project was developed as part of a Frontend Engineering challenge focused on building a highly interactive, responsive, and data-driven educational dashboard.

---

# Live Demo

Deployed Application:

https://next-gen-learning-dashboard-mocha.vercel.app/

---

# Project Goal

The objective of this project was to create a premium learning dashboard that combines:

* Modern UI/UX principles
* Responsive design
* Reusable component architecture
* Server-side data fetching
* Real database integration
* Smooth animations and micro-interactions

Rather than displaying static content, the dashboard retrieves course information from a Supabase PostgreSQL database and renders it dynamically using Next.js Server Components.

---

# Key Features

## Dashboard Layout

The application follows a Bento Grid layout to organize information into visually distinct sections.

### Hero Section

Displays:

* Welcome message
* Learning streak indicator
* Personalized dashboard overview

### Course Cards

Each course card contains:

* Dynamic icon
* Course title
* Progress percentage
* Animated progress bar

All course data is fetched from Supabase.

### Activity Section

Displays a visual learning activity overview using a contribution-style grid.

### Navigation

Includes:

* Desktop sidebar navigation
* Mobile bottom navigation
* Active state indicators
* Animated transitions

---

# Architecture Overview

The project follows a modular component architecture.

## Folder Structure
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/7b7e5435-3b65-434c-beec-18ebee6062b2" />


### Design Philosophy

The codebase is separated into independent feature modules:

* dashboard → dashboard-specific UI
* navigation → navigation components
* animations → reusable Framer Motion utilities
* skeletons → loading states
* lib → data access and integrations

This approach improves maintainability and allows future features to be added without affecting existing functionality.

---

# Technology Stack

## Frontend

* Next.js 16 (App Router)
* React
* TypeScript
* Tailwind CSS

## Backend / Database

* Supabase
* PostgreSQL

## Animation

* Framer Motion

## Icons

* Lucide React

---

# Why I Chose This Architecture

## Next.js App Router

I chose Next.js App Router because it provides:

* Server Components
* Improved performance
* Better routing structure
* Reduced client-side JavaScript

Using Server Components allows database operations to happen on the server while keeping the client lightweight.

---

## Supabase

Instead of hardcoding course information, I wanted the dashboard to work with real backend data.

Supabase provided:

* PostgreSQL database
* Quick setup
* Scalable backend solution
* Easy integration with Next.js

This allows the project to evolve into a larger application without major architectural changes.

Future backend features could include:

* Authentication
* User profiles
* Course enrollment
* Analytics tracking
* Learning history

---

## Framer Motion

The challenge required smooth and performant animations.

Framer Motion was chosen because it provides:

* Hardware-accelerated animations
* Spring physics
* Layout animations
* Easy hover interactions

Animations are implemented using transform and opacity properties to minimize layout shifts and maintain performance.

---

# Database Structure

The project uses a courses table inside Supabase.

## Schema

```sql
create table courses (
  id uuid primary key,
  title text,
  progress integer,
  icon_name text,
  created_at timestamp
);
```

## Sample Data

```sql
insert into courses
(title, progress, icon_name)
values
('Advanced React Patterns', 75, 'Code2'),
('Next.js Mastery', 90, 'Rocket'),
('Machine Learning Basics', 55, 'Brain'),
('Data Structures', 68, 'Database');
```

# Data Flow

The dashboard follows the following flow:

Supabase Database

↓

Server Component

↓

getCourses()

↓

CourseCard Components

↓

Rendered Dashboard

This ensures that data is dynamically fetched rather than hardcoded.

---

# Animation Features

Implemented using Framer Motion:

* Staggered page entrance animations
* Hover elevation effects
* Animated progress bars
* Spring-based transitions
* Navigation active-state animations

The goal was to create smooth interactions without introducing layout shifts.

---

# Responsive Design

## Desktop (>1024px)

* Full sidebar navigation
* Multi-column Bento Grid

## Tablet (768px – 1024px)

* Collapsible navigation
* Two-column dashboard layout

## Mobile (<768px)

* Bottom navigation bar
* Single-column layout
* Touch-friendly interactions

---

# Loading & Error Handling

## Loading States

Implemented using:

* loading.tsx
* DashboardSkeleton
* HeroSkeleton
* CourseSkeleton
* ActivitySkeleton

This improves perceived performance while data is loading.

## Error Handling

Implemented using:

* error.tsx

This ensures the application fails gracefully if database connectivity issues occur.

---

# Development Process

The project was developed in the following stages:

1. Create dashboard layout and responsive structure.
2. Build reusable UI components.
3. Integrate Supabase database.
4. Replace static data with dynamic data fetching.
5. Add Framer Motion animations.
6. Implement loading and error states.
7. Optimize responsiveness.
8. Deploy using Vercel.

This iterative approach allowed each feature to be tested independently before integration.

---

# Environment Variables

Create a .env.local file:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Create a .env.example file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

# Installation

Clone repository:

```bash
git clone <repository-url>
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Application:

```txt
http://localhost:3000
```
output look like=
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/0b546792-b775-4ccc-9d45-02d726c7edf1" />


---

# Future Improvements

Potential future enhancements include:

* User authentication
* Personalized dashboards
* Real analytics tracking
* Learning streak persistence
* Course enrollment system
* User profiles
* Advanced activity visualization
* Dashboard customization

---

Frontend Engineering Project

