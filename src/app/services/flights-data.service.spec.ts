import { TestBed } from '@angular/core/testing';

import { FlightsDataService } from './flights-data.service';

describe('FlightsDataService', () => {
  let service: FlightsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
