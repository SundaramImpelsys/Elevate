import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  submittedData: { name: string, email: string } | null = null;

  // onSubmit method to handle form submission
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      // Store form data in the component
      this.submittedData = contactForm.value;

      // You can log the form data or send it to a server
      console.log('Form Submitted!', this.submittedData);

      // Optionally reset the form after submission
      contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
