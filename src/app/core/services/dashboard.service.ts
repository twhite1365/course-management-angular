import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";
import { DashboardKpiDto } from "src/app/models/DashboardKpiDto";

@Injectable({ providedIn: "root" })
export class DashboardService {
  constructor(private http: HttpService) {}

  GetDashboardKPIs(): Observable<DashboardKpiDto> {
    const url = "dashboard";
    return this.http.get<DashboardKpiDto>(url);
  }
}
