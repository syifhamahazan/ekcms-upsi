import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MywishlistService {
  wishlistData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  changeWishlistData(data: any) {
    this.wishlistData$.next(data);
  }

  wishlistData(postData: any): Observable<any> {
    console.log('Get Wishlist');
    return this.httpService.getWishlist('wishlist', postData);
  }

}
