import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountService } from '../../services/count.service';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/interfaces/user.data';
import { Store } from '@ngrx/store';
import { login } from '../../store/actions/userVerification.actions';
import { AuthState } from '../../store/reducers/userVerification.reducers';
import { selectUser } from 'src/app/store/selectors/userVerification.selectors';

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
  enrolledCourses: [],
  createdCourses: []
  }
  isPasswordVisible: boolean = false; 
  isConfrimPasswordVisible: boolean = false; 

  step: number = 1; 
  emailExists: boolean = false;

  isFocusedEmail: boolean = false;


  constructor(
    private readonly countService: CountService, 
    private readonly router: Router, 
    private readonly store: Store<AuthState>,
    private readonly dataService: DataService) {}

  emailExist(): void {
    this.isFocusedEmail = false;
    console.log(this.isFocusedEmail);
    this.dataService.getItems().subscribe((items: UserData[]) => {
      const user = items.find(item => item.email === this.registrationData.email);
      this.emailExists = !!user; // Set emailExists based on whether the user is found
    }, (error: any) => {
      console.error('Error fetching items:', error);
      this.emailExists = false; // Default to false on error
    });
  }

  onEmailFocus(){
    this.isFocusedEmail = true;
    console.log(this.isFocusedEmail);
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

        } 
        delete this.registrationData.confirmPassword;
        const user = this.registrationData;
        console.log('signin successful:', user);
        localStorage.setItem('authState', JSON.stringify({ user, isLoggedIn: true }));
        this.store.dispatch(login({ user }));
        this.router.navigate(['/dashboard']); 


        this.dataService.addItem(this.registrationData).subscribe(response => {
          console.log('Registration Data added:', response);
          this.store.select(selectUser).subscribe(user => { 
            console.log(user);
          });
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
