import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./courses/pages/course-page/course-page.component').then(m => m.CoursePage) },

  { path: 'courses', loadComponent: () => import('./courses/pages/course-page/course-page.component').then(m => m.CoursePage) },
  { path: 'courses/new', loadComponent: () => import('./courses/pages/create-course-page/create-course-page.component').then(m => m.CreateCoursePage) },
  { path: 'dashboard', loadComponent: () => import('./dashboard/pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPage) },
  { path: 'instructors', loadComponent: () => import('./instructors/pages/instructors-page/instructors-page.component').then(m => m.InstructorsPage) },
  { path: 'settings', loadComponent: () => import('./settings/pages/settings-page/settings-page.component').then(m => m.SettingsPage) },
  
  { path: '**', redirectTo: 'courses' }
];
