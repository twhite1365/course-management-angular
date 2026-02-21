import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() appName = 'CourseOps';
  @Input() version = 'v0.1';

  readonly year = new Date().getFullYear();
}