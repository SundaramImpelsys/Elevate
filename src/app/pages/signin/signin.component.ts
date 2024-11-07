import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  name: string = ''; 
  email: string = ''; 
  gender: string = ''; 
  role: string = ''; 
  profession: string = ''; 
  experience: number | null = null; 
  password: string = ''; 
  confirmPassword: string = ''; 
  step: number = 1; 

  constructor(private trainerService: TrainerService, private router: Router) {}


  onNext() { 
    if (this.step === 1 && this.isStep1Valid()) 
      { this.step = 2; } 
    else if 
    (this.step === 2 && this.isStep2Valid()) 
      { this.step = 3; } 
    } 
    
    onSubmit() { 

      if (this.isStep3Valid()) {  
        if (this.role === 'trainer') { this.trainerService.incrementTrainerCount(); this.router.navigate(['']); } else { this.router.navigate(['']); }
        console.log("Name:", this.name); console.log("Email:", this.email); console.log("Gender:", this.gender); console.log("Role:", this.role); console.log("Profession:", this.profession); console.log("Experience:", this.experience); console.log("Password:", this.password); 
      } 
    } 
    
    back(event: Event) { 
      event.preventDefault(); 
      console.log("yes"); 
      this.step = this.step - 1; 
    }

    isStep1Valid(): boolean { 
      return !!this.name && !!this.email && !!this.gender && !!this.role; 
    } 
    
    isStep2Valid(): boolean { 
      return !!this.profession.length && this.experience !== null; 
    } 
    
    isStep3Valid(): boolean { 
      return this.password.length >= 6 && this.password === this.confirmPassword; 
    } 
  }
