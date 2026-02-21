import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterLink, RouterLinkActive],
})

export class SidebarComponent {
  menuItems = [
    {label:'Dashboard', path: '/dashboard'}, 
    {label: 'Courses', path: '/courses'}, 
    {label: 'Instructors', path: '/instructors'}, 
    {label:'Settings', path:'/settings'}
  ]
}