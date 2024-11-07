// trainer.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private trainerCount = 100;

  incrementTrainerCount() {
    this.trainerCount++;
  }

  getTrainerCount() {
    return this.trainerCount;
  }
}
