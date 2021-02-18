import { TestBed } from '@angular/core/testing';

import { MyoverdueService } from './myoverdue.service';

describe('MyoverdueService', () => {
  let service: MyoverdueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyoverdueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
