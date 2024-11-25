import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserData } from '../../interfaces/user.data'; 
import { Store } from '@ngrx/store';
import { login } from '../../store/actions/userVerification.actions';
import { AuthState } from '../../store/reducers/userVerification.reducers'; // Ensure the import path is correct
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/components/custom-dialog/custom-dialog.component';

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
    public dialog: MatDialog,
    private readonly store: Store<AuthState>
  ) {}

  togglePasswordVisibility(): void { 
    this.isPasswordVisible = !this.isPasswordVisible; 
  }

  openDialog(mes: string): void { 
    this.dialog.open(CustomDialogComponent, { 
      data: { message: mes } 
    });
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
          this.openDialog('Invalid username or password, First time to elevate then create a new account');
        }
      },
      error: (error: any) => {
        console.error('Error fetching items:', error);
        this.openDialog('An error occurred. Please try again.');
      }
    });
  }
  

  navigateToSignin() {
    this.router.navigate(['/signin']);
  }
}
