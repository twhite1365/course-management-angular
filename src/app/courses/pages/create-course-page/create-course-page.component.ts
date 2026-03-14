import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { CoursesService } from "src/app/core/services/courses.service";
import { CreateCourseRequest } from "src/app/models/create-course-request";

@Component({
  selector: "create-course-page",  
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: "./create-course-page.component.html",
  styleUrl: "./create-course-page.component.css",
})
export class CreateCoursePage {
  private readonly fb = inject(FormBuilder);
  private readonly coursesService = inject(CoursesService);
  private readonly router = inject(Router);

  submitting = false;
  submitAttempted = false;
  submitError = "";

  readonly form = this.fb.nonNullable.group(
    {
      name: ["", [Validators.required, Validators.minLength(3)]],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      description: ["", [Validators.maxLength(500)]],
      iconUrl: ["", [Validators.maxLength(2048)]],
    },
    { validators: [this.dateRangeValidator] }
  );

  protected shouldShowError(controlName: keyof CreateCourseRequest): boolean {
    const control = this.form.controls[controlName];
    return !!control && control.invalid && (control.touched || this.submitAttempted);
  }

  protected hasFormError(errorCode: string): boolean {
    return !!this.form.errors?.[errorCode] && (this.form.touched || this.submitAttempted);
  }

  submit(): void {
    this.submitAttempted = true;
    this.submitError = "";

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    const value = this.form.getRawValue();
    const payload: CreateCourseRequest = {
      name: value.name.trim(),
      startDate: value.startDate,
      endDate: value.endDate,
      description: value.description.trim() || undefined,
      iconUrl: value.iconUrl.trim() || undefined,
    };

    this.coursesService.createCourse(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.form.reset({
          name: "",
          startDate: "",
          endDate: "",
          description: "",
          iconUrl: "",
        });
        this.router.navigate(["/courses"]);
      },
      error: () => {
        this.submitting = false;
        this.submitError = "Failed to create course. Check the API and try again.";
      },
    });
  }

  private dateRangeValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const { startDate, endDate } = control.getRawValue() as CreateCourseRequest;
    if (!startDate || !endDate) {
      return null;
    }

    return new Date(startDate) <= new Date(endDate)
      ? null
      : { invalidDateRange: true };
  }
}
