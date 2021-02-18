import { TestBed } from '@angular/core/testing';

import { MyreservationService } from './myreservation.service';

describe('MyreservationService', () => {
  let service: MyreservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyreservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
