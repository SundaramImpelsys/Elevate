import { TestBed } from '@angular/core/testing';

import { DoctorCourseService } from './doctor-course.service';

describe('DoctorCourseService', () => {
  let service: DoctorCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
