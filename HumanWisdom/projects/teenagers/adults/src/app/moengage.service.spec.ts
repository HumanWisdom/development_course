import { TestBed } from '@angular/core/testing';

import { MoengageService } from './moengage.service';

describe('MoengageService', () => {
  let service: MoengageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoengageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
