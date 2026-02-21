# Course Management – Angular Frontend

This is a small **Angular 20** single page application that models a simple course management dashboard.  
The goal of this project is to showcase my ability to structure and build a modern Angular app using:

- Standalone components and feature based architecture
- Routing, services, directives, and pipes
- Mock data and a lightweight local API for development

A separate **.NET backend API** is planned and will be wired into this frontend in a later phase.

---

## Features

- **Dashboard**
  - High level KPIs (total courses, categories, etc.)
  - Reusable KPI card component

- **Courses**
  - Course list with dedicated course card component
  - Category display and basic formatting
  - Change description and save through a central service (currently mocked)

- **Instructors**
  - Instructors page wired into the main layout and navigation

- **Settings**
  - Placeholder page for future configuration options

- **Shared UI**
  - `kpi-card` shared component used across pages
  - Layout with header, sidebar navigation, and main content area

---

## Tech Stack

- **Framework:** Angular 20 (standalone APIs)
- **Language:** TypeScript
- **Tooling:** Angular CLI, RxJS
- **Styling:** CSS
- **Dev server / local API:** Node based server in `/server` (from the Angular course starter)

---

## Project Structure

```text
src/
  app/
    dashboard/
    courses/
    instructors/
    settings/
    shared/
    app.component.*        # root shell and layout
    app.config.ts          # bootstrap configuration
    app.routes.ts          # client side routes
  assets/
  environments/
server/
  get-courses.route.ts     # GET /api/courses
  save-course.route.ts     # PUT /api/courses/:id (mock route, not used in Phase 1)