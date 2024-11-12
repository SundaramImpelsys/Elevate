import { Component, OnInit } from '@angular/core';
import { NurseCourseService } from 'src/app/services/nurse-course.service';

@Component({
  selector: 'app-nursing-course',
  templateUrl: './nursing-course.component.html',
  styleUrls: ['./nursing-course.component.css']
})
export class NursingCourseComponent implements OnInit {
  courses: any = [];
  filteredCourses: any = [];
  uniqueTrainers: any = [];
  uniqueRatings: any = [];

  selectedTrainer: string = '';
  selectedRating: number | null = null;

  constructor(private readonly nurseCourseService: NurseCourseService) {}

  ngOnInit(): void {
    this.nurseCourseService.getCourse().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
      this.uniqueTrainers = [...new Set(data.map((course: any) => course.trainerName))];
      this.uniqueRatings = [...new Set(data.map((course: any) => course.rating))];
    });
  }

  applyFilters(): void {
    this.filteredCourses = this.courses.filter((course: any) => {
      console.log(this.selectedRating);
      return (this.selectedTrainer ? course.trainerName === this.selectedTrainer : true) &&
             (this.selectedRating ? course.rating === this.selectedRating : true);
    });
  }
}
