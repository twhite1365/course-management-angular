import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CourseDto } from "src/app/models/course.dto";
import { PaginatedResult } from "src/app/models/paginated-result";
import { ApiService } from "./api.service";

@Injectable({ providedIn: "root" })
export class CoursesService {
  private apiService = inject(ApiService);

  constructor(private httpclient: HttpClient) {}

  getCourses(
    page: number = 1,
    size: number = 10,
    isActive: boolean = true,
  ): Observable<PaginatedResult<CourseDto>> {

    const url = this.apiService.buildUrl("courses");

    const params = new HttpParams()
      .set("pageNumber", page)
      .set("pageSize", size)
      .set("isActive", isActive.toString());

    return this.httpclient.get<PaginatedResult<CourseDto>>(url, { params });
  }
}
