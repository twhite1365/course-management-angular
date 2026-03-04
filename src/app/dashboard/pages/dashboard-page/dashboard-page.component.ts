import { Component } from "@angular/core";
import { DashboardService } from "src/app/core/services/dashboard.service";
import { DashboardKpiDto } from "src/app/models/DashboardKpiDto";
import { KpiCard } from "src/app/shared/kpi-card/kpi-card.component";

@Component({
  selector: "dashboard-page",
  imports: [KpiCard],
  templateUrl: "./dashboard-page.component.html",
  styleUrl: "./dashboard-page.component.css",
})
export class DashboardPage {
  constructor(private dashboardService: DashboardService) {}

  dashboardkpis!: DashboardKpiDto;
  loading = true;
  error = false;

  kpis: { value: number; description: string }[] = [];

  ngOnInit() {
    this.dashboardService.GetDashboardKPIs().subscribe({
      next: (kpis) => {
        this.dashboardkpis = kpis;

        this.kpis = [
          { value: kpis.totalStudents, description: "Total Students" },
          { value: kpis.activeCourses, description: "Active Courses" },
          { value: kpis.totalEnrollments, description: "Total Enrollments" },
          { value: kpis.activeInstructors, description: "Active Instructors" },
        ];
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }
}
