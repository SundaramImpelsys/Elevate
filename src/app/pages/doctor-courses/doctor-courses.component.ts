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
  uniqueTrainers: string[] = [];
  uniqueRatings: number[] = [];

  selectedTrainer: string = '';
  selectedRating: string = '';
  searchQuery: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(private readonly doctorCourseService: DoctorCourseService) {}

  ngOnInit(): void {
    this.doctorCourseService.getCourse().subscribe((data) => {
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
      const ratingMatch = this.selectedRating ? course.rating === Number(this.selectedRating) : true;
      const searchMatch = course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          course.trainerName.toLowerCase().includes(this.searchQuery.toLowerCase());
      return trainerMatch && ratingMatch && searchMatch;
    });
    this.currentPage = 1; // Reset to the first page after filtering
  }

  onSearch(event: any): void {
    this.searchQuery = event.target.value;
    this.applyFilters();
  }

  get paginatedCourses(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredCourses.slice(start, end);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.filteredCourses.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }
}
