import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesService } from "../../../core/services/courses.service";
import { CourseCardComponent } from "../../course-card/course-card.component";
import { CourseImageComponent } from "../../course-image/course-image.component";
import { CourseDto } from "src/app/models/course.dto";
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: "course-page",
  imports: [CommonModule, CourseCardComponent, CourseImageComponent, MatPaginatorModule],

  templateUrl: "./course-page.component.html",
  styleUrls: ["./course-page.component.css"],
})
export class CoursePage {
  courses: CourseDto[] = [];
  coursesTotal = 0;
  pageNumber = 1;
  pageSize = 10;
  private readonly coursesService = inject(CoursesService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  loading = true;
  error = false;

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.pageNumber = this.parsePositiveNumber(params.get("pageNumber"), 1);
      this.pageSize = this.parsePositiveNumber(params.get("pageSize"), 10);
      this.loadCourses();
    });
  }

  private loadCourses() {
    this.loading = true;
    this.error = false;

    this.coursesService.getCourses(this.pageNumber, this.pageSize).subscribe({
      next: (courses) => {
        this.courses = courses.items;
        this.coursesTotal = courses.totalCount;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  private parsePositiveNumber(value: string | null, fallback: number): number {
    const parsed = Number(value);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
  }

  handlePageEvent(event: PageEvent) {
  // 1. If the page size changed, call onPageSizeChange
  if (event.pageSize !== this.pageSize) {
    this.onPageSizeChange(event.pageSize);
  } 
  // 2. If the size stayed the same, but the index changed, call onPageChange
  else {
    // Material uses 0-based index, so we add 1 for your 1-based method
    this.onPageChange(event.pageIndex + 1);
  }
}

  onPageChange(pageNumber: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        pageNumber,
        pageSize: this.pageSize,
      },
      queryParamsHandling: "merge",
    });
  }

  onPageSizeChange(pageSize: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        pageNumber: 1,
        pageSize,
      },
      queryParamsHandling: "merge",
    });
  }

  onEditCourse() {
    // this.courses[1].category = 'ADVANCED';
  }

  // implement this in a taler commit

  save(course: CourseDto) {
    // this.coursesService.saveCourse(course).subscribe( () => console.log('Course Saved!') );
  }
}
