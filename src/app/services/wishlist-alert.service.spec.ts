import { TestBed } from '@angular/core/testing';

import { WishlistAlertService } from './wishlist-alert.service';

describe('WishlistAlertService', () => {
  let service: WishlistAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
