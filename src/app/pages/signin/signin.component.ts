import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountService } from '../../services/count.service';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/interfaces/user.data';

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
  confirmPassword:  '',
  enrolledCourses: []
  }
  isPasswordVisible: boolean = false; 
  isConfrimPasswordVisible: boolean = false; 

  step: number = 1; 
  emailExists: boolean = false;

  constructor(private readonly countService: CountService, private readonly router: Router, private readonly dataService: DataService) {}

  emailExist(): void {
    this.dataService.getItems().subscribe((items: UserData[]) => {
      const user = items.find(item => item.email === this.registrationData.email);
      this.emailExists = !!user; // Set emailExists based on whether the user is found
    }, (error: any) => {
      console.error('Error fetching items:', error);
      this.emailExists = false; // Default to false on error
    });
  }


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
          this.countService.incrementTrainerCount(); 
          this.router.navigate(['']); 
        } 
        else { 
          this.router.navigate(['login']); 
        }
        console.log(this.registrationData);
        delete this.registrationData.confirmPassword;

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

    togglePasswordVisibility(): void { 
      this.isPasswordVisible = !this.isPasswordVisible; 
    }

    toggleConfrimPasswordVisibility(): void { 
      this.isConfrimPasswordVisible = !this.isConfrimPasswordVisible; 
    }
  }
