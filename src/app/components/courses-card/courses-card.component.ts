import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent {
  // @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() trainerName!: string;
  @Input() rating!: number;
}

