import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCoursesDialogComponent } from './delete-courses-dialog.component';

describe('DeleteCoursesDialogComponent', () => {
  let component: DeleteCoursesDialogComponent;
  let fixture: ComponentFixture<DeleteCoursesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCoursesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCoursesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
