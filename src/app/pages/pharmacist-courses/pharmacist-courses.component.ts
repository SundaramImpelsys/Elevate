import { Component } from '@angular/core';
import { PharmacistCourseService } from 'src/app/services/pharmacist-course.service';

@Component({
  selector: 'app-pharmacist-courses',
  templateUrl: './pharmacist-courses.component.html',
  styleUrls: ['./pharmacist-courses.component.css']
})
export class PharmacistCoursesComponent {
  courses: any = [];
  filteredCourses: any = [];
  uniqueTrainers: any = [];
  uniqueRatings: any = [];

  selectedTrainer: string = '';
  selectedRating: number | null = null;

  constructor(private readonly pharmacistCourseService: PharmacistCourseService) {}

  ngOnInit(): void {
    this.pharmacistCourseService.getCourse().subscribe((data) => {
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
