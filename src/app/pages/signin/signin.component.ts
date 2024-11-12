import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../../services/trainer.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  registrationData: any ={
  name:  '',
  email: '',
  gender:  '',
  role:  '', 
  profession:  '',
  experience:  null,
  password:  '',
  confirmPassword:  ''
  }

  step: number = 1; 
  constructor(private trainerService: TrainerService, private router: Router, private dataService: DataService) {}


  onNext() { 
    if (this.step === 1 && this.isStep1Valid()) 
      { this.step = 2; } 
    else if 
    (this.step === 2 && this.isStep2Valid()) 
      { this.step = 3; } 
    } 
    
    onSubmit() { 

      if (this.isStep3Valid()) {  
        if (this.registrationData.role === 'trainer') { 
          this.trainerService.incrementTrainerCount(); 
          this.router.navigate(['']); 
        } 
        else { 
          this.router.navigate(['login']); 
        }
  

        this.dataService.addItem(this.registrationData).subscribe(response => {
          console.log('Registration Data added:', response);
         });
      } 
    } 
    
    back(event: Event) { 
      event.preventDefault(); 
      console.log("yes"); 
      this.step = this.step - 1; 
    }

    isStep1Valid(): boolean { 
      return !!this.registrationData.name && !!this.registrationData.email && !!this.registrationData.gender && !!this.registrationData.role; 
    } 
    
    isStep2Valid(): boolean { 
      return !!this.registrationData.profession.length && this.registrationData.experience !== null; 
    } 
    
    isStep3Valid(): boolean { 
      return this.registrationData.password.length >= 6 && this.registrationData.password === this.registrationData.confirmPassword; 
    } 
  }
