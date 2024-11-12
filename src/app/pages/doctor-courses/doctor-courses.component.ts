import { Component } from '@angular/core';
import { DoctorCourseService } from 'src/app/services/doctor-course.service';

@Component({
  selector: 'app-doctor-courses',
  templateUrl: './doctor-courses.component.html',
  styleUrls: ['./doctor-courses.component.css']
})
export class DoctorCoursesComponent {
  courses: any = [];
  filteredCourses: any = [];
  uniqueTrainers: any = [];
  uniqueRatings: any = [];

  selectedTrainer: string = '';
  selectedRating: number | null = null;

  constructor(private readonly doctorCourseService: DoctorCourseService) {}

  ngOnInit(): void {
    this.doctorCourseService.getCourse().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
      this.uniqueTrainers = [...new Set(data.map((course: any) => course.trainerName))];
      this.uniqueRatings = [...new Set(data.map((course: any) => course.rating))];
    });
  }

  applyFilters(): void {
    this.filteredCourses = this.courses.filter((course: any) => {
      return (this.selectedTrainer ? course.trainerName === this.selectedTrainer : true) &&
             (this.selectedRating !== null ? course.rating === Number(this.selectedRating) : true);
    });
  }
}
