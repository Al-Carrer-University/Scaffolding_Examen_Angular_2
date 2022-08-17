import { TestBed } from '@angular/core/testing';

import { AbstractHttpCallsService } from './abstract-http-calls.service';

describe('AbstractHttpCallsService', () => {
  let service: AbstractHttpCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractHttpCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
