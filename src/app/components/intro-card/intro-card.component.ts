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
    const duration = 2000; 
    const interval = 50; 
    const totalIntervals = duration / interval;
    const increments = this.number / totalIntervals;
    let count = 0;

    const counter = setInterval(() => {
      count += increments;
      this.currentNumber = Math.floor(count).toString();

      if (count >= this.number) {
        this.currentNumber = `${this.number}`;
        clearInterval(counter);
      }
    }, interval);
  }
}
