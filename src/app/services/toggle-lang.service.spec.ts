import { TestBed } from '@angular/core/testing';

import { ToggleLangService } from './toggle-lang.service';

describe('ToggleLangService', () => {
  let service: ToggleLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
