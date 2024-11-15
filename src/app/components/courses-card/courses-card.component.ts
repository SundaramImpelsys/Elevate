import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/interfaces/user.data';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store'; 
import { selectIsLoggedIn, selectUser } from 'src/app/store/selectors/userVerification.selectors';
import { AuthState } from 'src/app/store/reducers/userVerification.reducers';
import { updateUser } from 'src/app/store/actions/userVerification.actions';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent {
  user: UserData | null = null;
  isLoggedIn: boolean = false;

  constructor(private readonly dataService: DataService, 
    private readonly router: Router, 
    private readonly store: Store<AuthState>) {}

  @Input() title!: string;
  @Input() description!: string;
  @Input() trainerName!: string;
  @Input() rating!: number;

  ngOnInit(): void {
    this.store.select(selectIsLoggedIn).subscribe(isLoggedIn => { 
      this.isLoggedIn = isLoggedIn; 
    }); 
    
    this.store.select(selectUser).subscribe(user => { 
      this.user = user; 
    });
  }

  sendData() {
    if (this.user) {
      const userClone = { ...this.user, enrolledCourses: [...this.user.enrolledCourses] };
      userClone.enrolledCourses.push(this.title);
  
      console.log(userClone);
      this.store.dispatch(updateUser({ user: userClone }));
    } else {
      alert('User is not logged in.');
    }
  }
  
}
