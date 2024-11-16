import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserData } from '../../interfaces/user.data'; 
import { Store } from '@ngrx/store';
import { login } from '../../store/actions/userVerification.actions';
import { AuthState } from '../../store/reducers/userVerification.reducers'; // Ensure the import path is correct

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; 
  password: string = ''; 
  emailExists: boolean = true;
  isPasswordVisible: boolean = false; 

  constructor(
    private readonly router: Router, 
    private readonly dataService: DataService,
    private readonly store: Store<AuthState>
  ) {}

  togglePasswordVisibility(): void { 
    this.isPasswordVisible = !this.isPasswordVisible; 
  }

  onSubmit() {
    this.dataService.getItems().subscribe({
      next: (items: UserData[]) => {
        const user = items.find(item => item.email === this.email && item.password === this.password);
        if (user) {
          console.log('Login successful:', user);
          localStorage.setItem('authState', JSON.stringify({ user, isLoggedIn: true }));
          this.store.dispatch(login({ user }));
          this.router.navigate(['dashboard']); 
        } else {
          alert('Invalid username or password, if new to elevate create a new account');
        }
      },
      error: (error: any) => {
        console.error('Error fetching items:', error);
        alert('An error occurred. Please try again.');
      }
    });
  }
  

  navigateToSignin() {
    this.router.navigate(['/signin']);
  }
}
