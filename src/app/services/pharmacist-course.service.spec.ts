import { TestBed } from '@angular/core/testing';

import { PharmacistCourseService } from './pharmacist-course.service';

describe('PharmacistCourseService', () => {
  let service: PharmacistCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacistCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
