import { Component } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent {
  course: number = 1000; 
  workshops: number = 500;
  trainers: number = 0;

  constructor(private trainerService: TrainerService) {}
  ngOnInit() { 
    this.trainers = this.trainerService.getTrainerCount(); 
  }
}
