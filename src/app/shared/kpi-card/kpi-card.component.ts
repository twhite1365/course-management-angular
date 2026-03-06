import { Component, input } from '@angular/core';

@Component({
  selector: 'kpi-card',
  imports: [],
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.css'],
})
export class KpiCard {
  value = input.required<number>();
  description = input.required<string>();
}
