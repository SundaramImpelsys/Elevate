import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('animated', [
      state('true', style({
        transform: 'scale(1.1)',
        opacity: 1
      })),
      state('false', style({
        transform: 'scale(1)',
        opacity: 0.5
      })),
      transition('false => true', animate('200ms ease-in')),
      transition('true => false', animate('200ms ease-out'))
    ])
  ]
})
export class TestComponent {
  isHovered = false;
}
