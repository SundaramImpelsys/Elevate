import { Component, OnInit } from '@angular/core';
import { NurseCourseService } from 'src/app/services/nurse-course.service';
import { DoctorCourseService } from 'src/app/services/doctor-course.service';
import { NutritionistCourseService } from 'src/app/services/nutritionist-course.service';
import { PharmacistCourseService } from 'src/app/services/pharmacist-course.service';
import { UserData } from 'src/app/interfaces/user.data';
import { selectUser } from 'src/app/store/selectors/userVerification.selectors';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/reducers/userVerification.reducers';
import { updateUser } from 'src/app/store/actions/userVerification.actions';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  title: string = '';
  description: string = '';
  courseIntroduction: string = '';
  courseKeyConcepts: string = '';
  courseConclusion: string = '';
  step: number = 1; // to track the current step
  user: UserData | null = null;

  constructor(
    private readonly store: Store<AuthState>,
    private readonly dataService: DataService,
    private readonly nurseCourseService: NurseCourseService,
    private readonly doctorCourseService: DoctorCourseService,
    private readonly nutritionistCourseService: NutritionistCourseService,
    private readonly pharmacistCourseService: PharmacistCourseService,
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => { 
      this.user = user; 
      console.log(user);
    });

  }
  nextStep(): void {
    this.step++;
  }

  previousStep(): void {
    this.step--;
  }

  onSubmit() {
    const course = {
      title: this.title,
      description: this.description,
      trainerName: this.user?.name ?? '',
      courseIntroduction: this.courseIntroduction,
      courseKeyConcepts: this.courseKeyConcepts,
      courseConclusion: this.courseConclusion,
      rating: 1
    };

    if (this.user) {
      const userClone = { ...this.user, createdCourses: [...this.user.createdCourses] };
      if (userClone.createdCourses.includes(this.title)) {
        alert('Course already exists.');
        return;
      }
      userClone.createdCourses.unshift(this.title);
      this.dataService.putItem(this.user.id, userClone).subscribe(() => {
        console.log('Course added successfully');
      });
      this.store.dispatch(updateUser({ user: userClone }));
    } else {
      alert('User is not logged in.');
    }

    const profession = this.user?.profession;

    if (profession) {
      this.http.post('http://localhost:3000/addCourse', { course, profession }).subscribe(() => {
        console.log(`${profession} course added successfully`);
      });
    }

    this.router.navigate(['/dashboard']);
  }

  isValidInput(input: string): boolean {
    const regex = /.*[a-zA-Z].*/;
    return regex.test(input);
  }

  allStepOneFieldsFilled(): boolean {
    return this.isValidInput(this.title) && this.isValidInput(this.description);
  }

  allStepTwoFieldsFilled(): boolean {
    return this.isValidInput(this.courseIntroduction) && this.isValidInput(this.courseKeyConcepts) && this.isValidInput(this.courseConclusion);
  }

  cancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
