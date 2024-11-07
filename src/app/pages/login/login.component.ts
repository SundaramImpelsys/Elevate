import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  username: string = ''; 
  password: string = ''; 
  
  onSubmit() { // Handle form submission 
    console.log('Username:', this.username); 
    console.log('Password:', this.password); 
  }

  navigateToSignin() {
    this.router.navigate(['/signin']);
  }
}
