/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarvelRequestService } from './marvel-request.service';

describe('Service: MarvelRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelRequestService]
    });
  });

  it('should ...', inject([MarvelRequestService], (service: MarvelRequestService) => {
    expect(service).toBeTruthy();
  }));
});
