import { TestBed } from '@angular/core/testing';

import { CoreApiServiceService } from './core-api-service.service';

describe('CoreApiServiceService', () => {
  let service: CoreApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
