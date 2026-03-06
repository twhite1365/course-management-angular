import { inject, Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";
import { DashboardKpiDto } from "src/app/models/DashboardKpiDto";

@Injectable({ providedIn: "root" })
export class DashboardService {
  private http = inject (HttpService);  

  GetDashboardKPIs(): Observable<DashboardKpiDto> {
    const url = "dashboard";
    return this.http.get<DashboardKpiDto>(url);
  }
}
