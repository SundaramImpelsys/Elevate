import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/interfaces/user.data';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent {
  user: UserData | null = null;

  constructor(private readonly dataService: DataService, private router: Router) {}

  isLoggedIn: boolean = false;

  @Input() title!: string;
  @Input() description!: string;
  @Input() trainerName!: string;
  @Input() rating!: number;

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user;
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  sendData() {
    if (this.user) {
      this.user.enrolledCourses.push(this.title);
      console.log(this.user);
      this.dataService.putItem(this.user.id, this.user).subscribe(
        (response: UserData) => {
          console.log('Course added successfully.', response);
          alert('Course added successfully.');
        },
        (error: any) => {
          console.error('Error in enrolling:', error);
          alert('An error occurred. Please try again.');
        }
      );
    } else {
      alert('User is not logged in.');
    }
  }
}
