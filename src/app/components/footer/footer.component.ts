import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';
  loading: boolean = false;

  constructor(private readonly subscriptionService: SubscriptionService) {}

  onSubscribe(subscribeForm: NgForm) {
    if (this.email) {
      this.loading = true;
      this.subscriptionService.subscribe(this.email).subscribe(
        response => {
          console.log('Subscription successful', response);
          this.loading = false;
          alert('Thank you for subscribing!');
          subscribeForm.resetForm();
        },
        error => {
          console.error('Subscription error', error);
          this.loading = false;
          alert('An error occurred. Please try again.');
        }
      );
    }
  }
}
