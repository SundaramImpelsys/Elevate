import { Component } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { HelpBottomSheetComponent } from '../help-bottom-sheet/help-bottom-sheet.component';

@Component({
  selector: 'app-home-help',
  templateUrl: './home-help.component.html',
  styleUrls: ['./home-help.component.css']
})
export class HomeHelpComponent {
  constructor(private readonly _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open( HelpBottomSheetComponent );
  }
}
