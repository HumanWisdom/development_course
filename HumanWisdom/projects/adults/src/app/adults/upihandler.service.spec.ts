import { TestBed } from '@angular/core/testing';

import { UPIHandlerService } from './upihandler.service';

describe('UPIHandlerService', () => {
  let service: UPIHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UPIHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
