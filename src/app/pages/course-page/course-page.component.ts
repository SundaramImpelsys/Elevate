import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { NurseCourseService } from 'src/app/services/nurse-course.service';
import { DoctorCourseService } from 'src/app/services/doctor-course.service';
import { NutritionistCourseService } from 'src/app/services/nutritionist-course.service';
import { PharmacistCourseService } from 'src/app/services/pharmacist-course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  courseTitle: string = '';
  courseData: any;
  keyConcepts: string[] = [];
  selectedRating: number = 5;  // Default rating set to 5

  constructor(
    private readonly route: ActivatedRoute,
    private readonly nurseCourseService: NurseCourseService,
    private readonly doctorCourseService: DoctorCourseService,
    private readonly nutritionistCourseService: NutritionistCourseService,
    private readonly pharmacistCourseService: PharmacistCourseService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseTitle = params['title'];
      this.searchCourse();
    });
  }

  searchCourse(): void {
    forkJoin([
      this.nurseCourseService.getCourse(),
      this.doctorCourseService.getCourse(),
      this.nutritionistCourseService.getCourse(),
      this.pharmacistCourseService.getCourse()
    ]).subscribe(([nurseCourses, doctorCourses, nutritionistCourses, pharmacistCourses]) => {
      const allCourses = [
        ...nurseCourses,
        ...doctorCourses,
        ...nutritionistCourses,
        ...pharmacistCourses
      ];
      this.courseData = allCourses.find(course => course.title === this.courseTitle);
      if (this.courseData) {
        this.keyConcepts = this.courseData.courseKeyConcepts.split(';').map((concept: string) => concept.trim()).filter((concept: string | any[]) => concept.length > 0);
      }
    });
  }
}
