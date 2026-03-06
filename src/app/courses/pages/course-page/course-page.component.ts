import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { CoursesService } from "../../../core/services/courses.service";
import { CourseCardComponent } from "../../course-card/course-card.component";
import { CourseImageComponent } from "../../course-image/course-image.component";
import { CourseDto } from "src/app/models/course.dto";

@Component({
  selector: "course-page",
  imports: [CommonModule, CourseCardComponent, CourseImageComponent],

  templateUrl: "./course-page.component.html",
  styleUrls: ["./course-page.component.css"],
})
export class CoursePage {
  courses: CourseDto[] = [];
  coursesTotal;
  private readonly coursesService = inject(CoursesService);

  ngOnInit() {
    this.coursesService
      .getCourses()
      .subscribe(
        (courses) => (
          (this.courses = courses.items),
          (this.coursesTotal = courses.totalCount)
        ),
      );
  }

  onEditCourse() {
    // this.courses[1].category = 'ADVANCED';
  }

  // implement this in a taler commit

  save(course: CourseDto) {
    // this.coursesService.saveCourse(course).subscribe( () => console.log('Course Saved!') );
  }
}
