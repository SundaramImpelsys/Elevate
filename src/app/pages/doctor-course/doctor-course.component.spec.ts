import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCourseComponent } from './doctor-course.component';

describe('DoctorCourseComponent', () => {
  let component: DoctorCourseComponent;
  let fixture: ComponentFixture<DoctorCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
