import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserData } from '../../interfaces/user.data'; 

import { Store } from '@ngrx/store'; 
import { selectIsLoggedIn, selectUser } from '../../store/selectors/userVerification.selectors'; 
import { AuthState } from '../../store/reducers/userVerification.reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: UserData | null = null;
  isLoggedIn: boolean = false;

  constructor(private readonly router: Router, 
    private readonly dataService: DataService, 
    private readonly store: Store<AuthState>) {}

  ngOnInit(): void {
    this.store.select(selectIsLoggedIn).subscribe(isLoggedIn => { 
      this.isLoggedIn = isLoggedIn; 
    }); 
    
    this.store.select(selectUser).subscribe(user => { 
      this.user = user; 
    });
  }

  deleteAccount(): void {
    if (this.user) {
      this.dataService.deleteItem(this.user.id).subscribe(
        () => {
          console.log('Account deleted successfully');
          localStorage.removeItem('user'); // Remove user data from localStorage
          this.router.navigate(['/']); // Redirect to home page
        },
        (error: any) => {
          console.error('Error deleting account:', error);
          alert('An error occurred. Please try again.');
        }
      );
    }
  }
}
