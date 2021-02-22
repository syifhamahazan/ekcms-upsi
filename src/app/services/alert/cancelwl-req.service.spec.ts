import { TestBed } from '@angular/core/testing';

import { CancelwlReqService } from './cancelwl-req.service';

describe('CancelwlReqService', () => {
  let service: CancelwlReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelwlReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
