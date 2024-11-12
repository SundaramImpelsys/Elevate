import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCoursesComponent } from './doctor-courses.component';

describe('DoctorCoursesComponent', () => {
  let component: DoctorCoursesComponent;
  let fixture: ComponentFixture<DoctorCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
