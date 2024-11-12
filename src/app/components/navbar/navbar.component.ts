import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
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
  }
}
