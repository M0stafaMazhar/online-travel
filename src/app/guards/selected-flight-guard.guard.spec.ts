import { TestBed } from '@angular/core/testing';

import { SelectedFlightGuardGuard } from './selected-flight-guard.guard';

describe('SelectedFlightGuardGuard', () => {
  let guard: SelectedFlightGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelectedFlightGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
