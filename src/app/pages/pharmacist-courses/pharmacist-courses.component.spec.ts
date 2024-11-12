import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistCoursesComponent } from './pharmacist-courses.component';

describe('PharmacistCoursesComponent', () => {
  let component: PharmacistCoursesComponent;
  let fixture: ComponentFixture<PharmacistCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacistCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
