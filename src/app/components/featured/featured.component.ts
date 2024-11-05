import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  isHovered = false;
  courses = [
    { imageSrc: 'assets/featured/nurse.png', title: 'Nursing' },
    { imageSrc: 'assets/featured/pharmacist.png', title: 'Medicine' },
    { imageSrc: 'assets/featured/medical profession.png', title: 'Health Profession' },
    { imageSrc: 'assets/featured/nutritionist.png', title: 'Nutrionist' },
  ];
  ngOnInit(): void {}
}
