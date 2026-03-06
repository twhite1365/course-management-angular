import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseDto } from "src/app/models/course.dto";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  course = input.required<CourseDto>();
  cardIndex = input<number>();
  courseChanged = output<CourseDto>();
  draftDescription = "";

  ngOnInit() {
    this.draftDescription = this.course().description;
  }

  onTitleChanged(newTitle: string) {
    this.draftDescription = newTitle;
  }

  onSaveClicked() {
    this.courseChanged.emit({
      ...this.course(),
      description: this.draftDescription,
    });
  }
}
