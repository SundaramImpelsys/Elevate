import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserData } from '../../interfaces/user.data'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: UserData | null = null;

  constructor(private readonly router: Router, private readonly dataService: DataService) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } 
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
