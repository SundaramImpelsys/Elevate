import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  submittedData: { name: string, email: string } | null = null;

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      this.submittedData = contactForm.value;
      console.log('Form Submitted!', this.submittedData);
      contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
