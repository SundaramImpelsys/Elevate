import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';
  loading: boolean = false;

  constructor(
    private readonly subscriptionService: SubscriptionService,
    public dialog: MatDialog,
  ) {}

  openDialog(mes: string): void { 
    this.dialog.open(CustomDialogComponent, { 
      data: { message: mes } 
    });
  }

  onSubscribe(subscribeForm: NgForm) {
    if (this.email) {
      this.loading = true;
      this.subscriptionService.subscribe(this.email).subscribe(
        response => {
          console.log('Subscription successful', response);
          this.loading = false;
          this.openDialog("Thank you for subscribing!");
          subscribeForm.resetForm();
        },
        error => {
          console.error('Subscription error', error);
          this.loading = false;
          this.openDialog("An error occurred. Please try again.");
        }
      );
    }
  }
}
