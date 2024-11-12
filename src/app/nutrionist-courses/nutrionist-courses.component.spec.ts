import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrionistCoursesComponent } from './nutrionist-courses.component';

describe('NutrionistCoursesComponent', () => {
  let component: NutrionistCoursesComponent;
  let fixture: ComponentFixture<NutrionistCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrionistCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrionistCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
