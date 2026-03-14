import { HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateCourseRequest } from "src/app/models/create-course-request";
import { CourseDto } from "src/app/models/course.dto";
import { PaginatedResult } from "src/app/models/paginated-result";
import { HttpService } from "./http.service";

@Injectable({ providedIn: "root" })
export class CoursesService {
  
  private readonly http = inject( HttpService );

  getCourses(
    page: number = 1,
    size: number = 10,
    isActive: boolean = true,
  ): Observable<PaginatedResult<CourseDto>> {

    const url = "courses";

    const params = new HttpParams()
      .set("pageNumber", page.toString())
      .set("pageSize", size.toString())
      .set("isActive", isActive.toString());

    return this.http.get<PaginatedResult<CourseDto>>(url, params);
  }

  createCourse(course: CreateCourseRequest): Observable<CourseDto> {
    return this.http.post<CourseDto>("courses", course);
  }
}
