import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { COURSES } from '../../../../db-data';
import { CoursesService } from '../../../courses/courses.service';
import { Course } from '../../../model/course';
import { CourseCardComponent } from '../../course-card/course-card.component';
import { CourseImageComponent } from '../../course-image/course-image.component';

@Component({
  selector: 'course-page',
  imports: [CommonModule, CourseCardComponent, CourseImageComponent],

  templateUrl: './course-page.component.html',
    styleUrls: ['./course-page.component.css'],
})
export class CoursePage {
courses: Course[] = COURSES;

    coursesTotal = this.courses.length;

    constructor( private coursesService: CoursesService ) {
    }

    onEditCourse() {
            this.courses[1].category = 'ADVANCED';
    }

    save(course: Course) {
        this.coursesService.saveCourse(course).subscribe( () => console.log('Course Saved!') );
    }
}
