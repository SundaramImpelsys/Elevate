import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from '../../interfaces/form.data';
import { FreeTrailService } from 'src/app/services/free-trail.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.css']
})
export class FreeTrialComponent implements OnInit {
  freeTrialForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder, 
    private readonly freeTrailService: FreeTrailService,
    public dialog: MatDialog,
  ) {
    this.freeTrialForm = this.fb.group({
      name: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,}$')]]
    });
  }

  ngOnInit(): void {}

  openDialog(mes: string): void { 
    this.dialog.open(CustomDialogComponent, { 
      data: { message: mes } 
    });
  }

  onSubmit(): void {
    if (this.freeTrialForm.valid) {
      const formData: FormData = this.freeTrialForm.value;
      this.freeTrailService.addItem(formData).subscribe((response: any) => {
        console.log('Registration Data added:', response);
      });
      console.log('Form Data:', formData);
      this.openDialog('Thanks for submiting! We will get back to you soon!');
    } else {
      this.openDialog('Please fill out all the required fields');
    }
  }
}
