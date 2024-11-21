import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatTooltipModule ,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
