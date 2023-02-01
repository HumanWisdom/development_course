import { TestBed } from '@angular/core/testing';

import { TeenagersService } from './teenagers.service';

describe('TeenagersService', () => {
  let service: TeenagersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeenagersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
