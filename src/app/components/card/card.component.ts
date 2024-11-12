import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private readonly router: Router) {}
  
  @Input() imageSrc: string = '';
  @Input() title?: string = '';
  @Input() description?: string = '';
  @Input() route?: string = '';

  navigateToRoute() { 
    this.router.navigate([this.route]); 
  }
}
