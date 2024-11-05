import { Component } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-help-bottom-sheet',
  templateUrl: './help-bottom-sheet.component.html',
  styleUrls: ['./help-bottom-sheet.component.css']
})
export class HelpBottomSheetComponent {
  constructor(private readonly _bottomSheetRef: MatBottomSheetRef<HelpBottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
