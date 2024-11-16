import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  trainers: number = 0;
  course: number = 0;
  workshops: number = 0;
  loadingCourse: boolean = true; 
  loadingWorkshop: boolean = true;
  loadingTrainer: boolean = true;

  constructor(private readonly countService: CountService) {}

  ngOnInit(): void {

    this.countService.getTrainerCount().subscribe({
      next: (trainerCount) => {
        this.trainers = trainerCount;  
        this.loadingTrainer = false;       
        console.log('trainers loaded:', this.trainers);
      },
      error: (err) => {
        console.error('Error loading course count:', err);
        this.loadingTrainer = false; 
      },
    });

    this.countService.getWorkshopCount().subscribe({
      next: (workshopCount) => {
        this.workshops = workshopCount;  
        this.loadingWorkshop = false;       
        console.log('workshop loaded:', this.workshops);
      },
      error: (err) => {
        console.error('Error loading course count:', err);
        this.loadingWorkshop = false; 
      },
    });

    this.countService.getCourseCount().subscribe({
      next: (courseCount) => {
        this.course = courseCount;  
        this.loadingCourse = false;       
        console.log('Courses loaded:', this.course);
      },
      error: (err) => {
        console.error('Error loading course count:', err);
        this.loadingCourse = false; 
      },
    });

  }

}
