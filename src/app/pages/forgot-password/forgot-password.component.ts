import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/interfaces/user.data'; // Ensure the correct import path
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/components/custom-dialog/custom-dialog.component';
import { login } from 'src/app/store/actions/userVerification.actions';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/reducers/userVerification.reducers';

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
  isPasswordVisible: boolean = false; 
  isConfrimPasswordVisible: boolean = false; 

  constructor(
    private readonly router: Router, 
    private readonly dataService: DataService,
    private readonly store: Store<AuthState>,
    public dialog: MatDialog,
  ) {}

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

  togglePasswordVisibility(): void { 
    this.isPasswordVisible = !this.isPasswordVisible; 
  }

  toggleConfrimPasswordVisibility(): void { 
    this.isConfrimPasswordVisible = !this.isConfrimPasswordVisible; 
  }

  openDialog(mes: string): void { 
    this.dialog.open(CustomDialogComponent, { 
      data: { message: mes } 
    });
  }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      this.openDialog('New Password and Confirm Password do not match.');
      return;
    }

    if (!this.emailExists) {
      this.openDialog('Email doesn\'t exist, please create your account');
      return;
    }

    this.dataService.getItems().subscribe((items: UserData[]) => {
      const user = items.find(item => item.email === this.email);
      if (user) {
        user.password = this.newPassword; 

        this.dataService.putItem(user.id, user).subscribe(
          (response: UserData) => {
            console.log('Password updated successfully:', response);
            this.openDialog('Password updated successfully.');
            localStorage.setItem('authState', JSON.stringify({ user, isLoggedIn: true }));
            this.store.dispatch(login({ user }));
            this.router.navigate(['dashboard']); 
          },
          (error: any) => {
            console.error('Error updating password:', error);
            this.openDialog('An error occurred. Please try again.');
          }
        );
      }
    }, (error: any) => {
      console.error('Error fetching items:', error);
      this.openDialog('An error occurred. Please try again.');
    });
  }
}
