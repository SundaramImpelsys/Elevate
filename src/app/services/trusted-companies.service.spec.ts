import { TestBed } from '@angular/core/testing';

import { TrustedCompaniesService } from './trusted-companies.service';

describe('TrustedCompaniesService', () => {
  let service: TrustedCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrustedCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
