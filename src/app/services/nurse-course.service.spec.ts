import { TestBed } from '@angular/core/testing';

import { NurseCourseService } from './nurse-course.service';

describe('NurseCourseService', () => {
  let service: NurseCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NurseCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
