import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  constructor(private readonly router: Router) {}
  
  isLoggedIn: boolean = false; 
  
  ngOnInit(): void { 
    this.checkLoginStatus(); }

  
  checkLoginStatus(): void { 
    const user = localStorage.getItem('user'); 
    this.isLoggedIn = !!user; 
  }

  logout(): void { 
    localStorage.removeItem('user'); 
    this.isLoggedIn = false; 
    this.router.navigate(['']);
  }
}
