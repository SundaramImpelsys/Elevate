import { TestBed } from '@angular/core/testing';

import { NutritionistCourseService } from './nutritionist-course.service';

describe('NutritionistCourseService', () => {
  let service: NutritionistCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionistCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
