import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { Course } from "../models/course";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

let counter = 0;

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  id: number;

  constructor(private http: HttpClient) {
    counter++;

    this.id = counter;
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");

    return this.http.get<Course[]>("/api/courses", { params });
  }

  saveCourse(course: Course): Observable<Course> {
    // TODO: Implement persistence (HTTP PUT) when backend API is wired up
    return of(course);
  }
}
