export interface CourseDto {
  courseId: number;
  name: string;
  startDate: string; // ISO string
  endDate: string;   // ISO string
  description?: string; // add when API supports it
  iconUrl?: string;
}