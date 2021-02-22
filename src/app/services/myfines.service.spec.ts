import { TestBed } from '@angular/core/testing';

import { MyfinesService } from './myfines.service';

describe('MyfinesService', () => {
  let service: MyfinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyfinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
