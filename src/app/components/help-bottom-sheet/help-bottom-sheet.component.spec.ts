import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpBottomSheetComponent } from './help-bottom-sheet.component';

describe('HelpBottomSheetComponent', () => {
  let component: HelpBottomSheetComponent;
  let fixture: ComponentFixture<HelpBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
