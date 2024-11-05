import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trustedCompaniesData = [
    { imageSrc: 'assets/cmp-logo/1.png', title: 'company 1'},
    { imageSrc: 'assets/cmp-logo/2.png', title: 'Company 2' },
    { imageSrc: 'assets/cmp-logo/3.png', title: 'company 3' },
    { imageSrc: 'assets/cmp-logo/4.png', title: 'Company 4' },
    { imageSrc: 'assets/cmp-logo/5.png', title: 'Company 5' },
    { imageSrc: 'assets/cmp-logo/6.png', title: 'Company 6' },
    { imageSrc: 'assets/cmp-logo/7.png', title: 'Company 7' },
    { imageSrc: 'assets/cmp-logo/8.png', title: 'Company 8' },
    { imageSrc: 'assets/cmp-logo/9.png', title: 'Company 9' },
  ];
}
