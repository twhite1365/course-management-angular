import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css'],  
})
export class CourseTitleComponent {
  title = input.required<string>();
}
