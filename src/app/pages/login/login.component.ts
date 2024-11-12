import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserData } from '../../interfaces/user.data'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = ''; 

  constructor(private router: Router, private dataService: DataService) {}

  onSubmit() {
    this.dataService.getItems().subscribe((items: UserData[]) => {
      const user = items.find(item => item.name === this.username && item.password === this.password);
      if (user) {
        console.log('Login successful:', user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['dashboard']); 
      } else {
        alert('Invalid username or password, if new to elevate create a new account');
      }
    }, (error: any) => {
      console.error('Error fetching items:', error);
      alert('An error occurred. Please try again.');
    });
  }
  navigateToSignin() {
    this.router.navigate(['/signin']);
  }
}
