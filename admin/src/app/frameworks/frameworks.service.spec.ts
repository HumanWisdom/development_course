import { TestBed } from '@angular/core/testing';

import { FrameworksService } from './frameworks.service';

describe('FrameworksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrameworksService = TestBed.get(FrameworksService);
    expect(service).toBeTruthy();
  });
});
