import { TestBed } from '@angular/core/testing';

import { TeenagerOnboardingService } from './teenager-onboarding.service';

describe('TeenagerOnboardingService', () => {
  let service: TeenagerOnboardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeenagerOnboardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
