import { TestBed } from '@angular/core/testing';

import { SubscribedMailService } from './subscribed-mail.service';

describe('SubscribedMailService', () => {
  let service: SubscribedMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribedMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
