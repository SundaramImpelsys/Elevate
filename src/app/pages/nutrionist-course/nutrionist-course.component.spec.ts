import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrionistCourseComponent } from './nutrionist-course.component';

describe('NutrionistCourseComponent', () => {
  let component: NutrionistCourseComponent;
  let fixture: ComponentFixture<NutrionistCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrionistCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrionistCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
