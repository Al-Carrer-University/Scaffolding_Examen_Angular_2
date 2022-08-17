import { TestBed } from '@angular/core/testing';

import { AnimalCrossingService } from './animal-crossing.service';

describe('AnimalCrossingService', () => {
  let service: AnimalCrossingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalCrossingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
