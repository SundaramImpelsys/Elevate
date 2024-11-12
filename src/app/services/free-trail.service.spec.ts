import { TestBed } from '@angular/core/testing';

import { FreeTrailService } from './free-trail.service';

describe('FreeTrailService', () => {
  let service: FreeTrailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeTrailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
