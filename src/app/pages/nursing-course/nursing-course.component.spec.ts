import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingCourseComponent } from './nursing-course.component';

describe('NursingCourseComponent', () => {
  let component: NursingCourseComponent;
  let fixture: ComponentFixture<NursingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursingCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
