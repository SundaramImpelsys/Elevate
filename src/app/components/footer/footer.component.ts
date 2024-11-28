import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { SubscribedMailService } from 'src/app/services/subscribed-mail.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
    private readonly subscribedMailService: SubscribedMailService
  ) {}

  // Open the dialog with a custom message
  openDialog(mes: string): void { 
    this.dialog.open(CustomDialogComponent, { 
      data: { message: mes } 
    });
  }

  // Function to check if the email already exists in the subscribed emails list
  checkEmailExistence(email: string): Observable<boolean> {
    return this.subscribedMailService.getSubscribedMails().pipe(
      map((subscribedMails) => {
        // Check if the email is already in the subscribed list
        return subscribedMails.some((mail: { email: string; }) => mail.email === email);
      }),
      catchError((error) => {
        console.error('Error fetching subscribed emails', error);
        return [false]; // Return false if there is an error
      })
    );
  }

  // Handle the subscribe form submission
  onSubscribe(subscribeForm: NgForm) {
    if (this.email) {
      this.loading = true;

      // First check if the email already exists
      this.checkEmailExistence(this.email).subscribe(
        (emailExists) => {
          if (emailExists) {
            this.loading = false;
            this.openDialog("You have already subscribed with this email.");
          } else {
            // If email does not exist, proceed with the subscription
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
        },
        (error) => {
          console.error('Error checking email existence', error);
          this.loading = false;
          this.openDialog("An error occurred. Please try again.");
        }
      );
    }
  }
}
