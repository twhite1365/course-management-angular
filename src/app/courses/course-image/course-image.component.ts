import { CommonModule } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-image',
   imports: [CommonModule],
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css'],
  
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl:string;



  constructor() { }

  ngOnInit() {
  }

}
