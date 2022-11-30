import { TestBed } from '@angular/core/testing';

import { AdultsService } from './adults.service';

describe('AdultsService', () => {
  let service: AdultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
