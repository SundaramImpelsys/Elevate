import { Component } from '@angular/core';
import { NutritionistCourseService } from 'src/app/services/nutritionist-course.service';

@Component({
  selector: 'app-nutrionist-course',
  templateUrl: './nutrionist-course.component.html',
  styleUrls: ['./nutrionist-course.component.css']
})
export class NutrionistCourseComponent {
  courses: any = [];
  filteredCourses: any = [];
  uniqueTrainers: any = [];
  uniqueRatings: any = [];

  selectedTrainer: string = '';
  selectedRating: number | null = null;

  constructor(private readonly nutritionCourseService: NutritionistCourseService) {}

  ngOnInit(): void {
    this.nutritionCourseService.getCourse().subscribe((data) => {
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
