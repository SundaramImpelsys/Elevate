import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthState } from '../../store/reducers/userVerification.reducers'; 
import { selectIsLoggedIn, selectUser } from '../../store/selectors/userVerification.selectors'; 
import { logout } from '../../store/actions/userVerification.actions'; 
import { UserData } from 'src/app/interfaces/user.data';
import { DataService } from 'src/app/services/data.service';
import { Observable, of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false; 
  user: UserData | null = null;

  constructor(
    private readonly router: Router,
    private readonly dataService: DataService,  
    private readonly store: Store<AuthState>
  ) {}

  ngOnInit(): void { 
    this.checkLoginStatus(); 
  }

  checkLoginStatus(): void { 
    this.store.select(selectIsLoggedIn).subscribe(isLoggedIn => { 
      this.isLoggedIn = isLoggedIn; 
    });
  }

  logout(): void { 
    localStorage.clear();
    this.store.dispatch(logout());
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
