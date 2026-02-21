import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'kpi-card',
  imports: [],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.css',
})
export class KpiCard {
  @Input() value!: number;
  @Input() description!: string;
}
