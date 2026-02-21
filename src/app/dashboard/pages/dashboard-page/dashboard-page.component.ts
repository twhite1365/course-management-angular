import { Component } from '@angular/core';
import { KpiCard } from 'src/app/shared/kpi-card/kpi-card.component';

@Component({
  selector: 'dashboard-page',
  imports: [KpiCard],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPage {

  kpis = [
    { value: 200, description: 'Courses Sold'},
    { value: 75, description: 'Users'},
    { value: 10, description: 'New User Signups'},
  ];

}
