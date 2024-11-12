import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistCourseComponent } from './pharmacist-course.component';

describe('PharmacistCourseComponent', () => {
  let component: PharmacistCourseComponent;
  let fixture: ComponentFixture<PharmacistCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacistCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
