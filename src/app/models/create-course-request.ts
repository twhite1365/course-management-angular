export interface CreateCourseRequest {
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
  iconUrl?: string;
}
