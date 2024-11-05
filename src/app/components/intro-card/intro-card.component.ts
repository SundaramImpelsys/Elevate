import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.component.html',
  styleUrls: ['./intro-card.component.css'],
})
export class IntroCardComponent {
  @Input() number: number = 0;
  @Input() text: string = '';
  currentNumber: string = '0';

  ngOnInit() {
    this.animateCounter();
  }

  animateCounter() {
    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 50; // Interval between increments in milliseconds
    const increments = Math.floor(this.number / (duration / interval));
    let count = 0;

    const counter = setInterval(() => {
      count += increments;
      this.currentNumber = count.toString();

      if (count >= this.number) {
        this.currentNumber = `${this.number}+`;
        clearInterval(counter);
      }
    }, interval);
  }
}
