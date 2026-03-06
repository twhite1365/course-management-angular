import { CommonModule } from '@angular/common';
import {Component, input, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-image',
   imports: [CommonModule],
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css'],
  
})
export class CourseImageComponent {
  imageUrl = input.required<string>({alias: 'src'});
}
