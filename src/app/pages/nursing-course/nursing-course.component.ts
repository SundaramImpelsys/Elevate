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
  uniqueTrainers: string[] = [];
  uniqueRatings: number[] = [];

  selectedTrainer: string = '';
  selectedRating: number | null = null;

  constructor(private readonly nurseCourseService: NurseCourseService) {}

  ngOnInit(): void {
    this.nurseCourseService.getCourse().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
      this.uniqueTrainers = this.getUniqueSortedTrainers(data);
      this.uniqueRatings = this.getUniqueSortedRatings(data);
    });
  }

  getUniqueSortedTrainers(data: any[]): string[] {
    const trainers = [...new Set(data.map(course => course.trainerName))];
    return trainers.sort((a, b) => a.localeCompare(b));
  }

  getUniqueSortedRatings(data: any[]): number[] {
    const ratings = [...new Set(data.map(course => course.rating))];
    return ratings.sort((a, b) => a - b);
  }

  applyFilters(): void {
    this.filteredCourses = this.courses.filter((course: any) => {
      const trainerMatch = this.selectedTrainer ? course.trainerName === this.selectedTrainer : true;
      const ratingMatch = this.selectedRating !== null ? course.rating === Number(this.selectedRating) : true;
      return trainerMatch && ratingMatch;
    });
  }
}
