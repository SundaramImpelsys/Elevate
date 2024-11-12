import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/interfaces/user.data'; // Ensure the correct import path

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = ''; 
  newPassword: string = ''; 
  confirmPassword: string = ''; 
  emailExists: boolean = true; 

  constructor(private router: Router, private dataService: DataService) {}

  emailExist(): void {
    this.dataService.getItems().subscribe((items: UserData[]) => {
      const user = items.find(item => item.email === this.email);
      this.emailExists = !!user; // Set emailExists based on whether the user is found
    }, (error: any) => {
      console.error('Error fetching items:', error);
      this.emailExists = false; // Default to false on error
    });
  }

  clearEmailError(): void { 
    this.emailExists = true; 
  }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      alert('New Password and Confirm Password do not match.');
      return;
    }

    if (!this.emailExists) {
      alert('Email doesn\'t exist, please create your account');
      return;
    }

    this.dataService.getItems().subscribe((items: UserData[]) => {
      const user = items.find(item => item.email === this.email);
      if (user) {
        user.password = this.newPassword; 
        user.confirmPassword = this.confirmPassword;
        this.dataService.putItem(user.id, user).subscribe(
          (response: UserData) => {
            console.log('Password updated successfully:', response);
            alert('Password updated successfully.');
            this.router.navigate(['login']); 
          },
          (error: any) => {
            console.error('Error updating password:', error);
            alert('An error occurred. Please try again.');
          }
        );
      }
    }, (error: any) => {
      console.error('Error fetching items:', error);
      alert('An error occurred. Please try again.');
    });
  }
}
