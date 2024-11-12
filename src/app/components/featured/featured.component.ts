import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  isHovered = false;
  courses = [
    { imageSrc: 'assets/featured/nurse.png', title: 'Nursing', route: 'nursingCourse' },
    { imageSrc: 'assets/featured/pharmacist.png', title: 'Medicine', route: 'pharmacistCourses'},
    { imageSrc: 'assets/featured/medical profession.png', title: 'Doctor', route: 'doctorCourses'},
    { imageSrc: 'assets/featured/nutritionist.png', title: 'Nutrionist', route: 'nutrionistCourses'},
  ];
  ngOnInit(): void {}
}
