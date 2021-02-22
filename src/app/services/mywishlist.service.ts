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

  getCurrentWishlistData(){
    return this.wishlistData$.getValue();
  }

  // delete data from Object
  deleteWishlistData(msgIndex: number){
    const data = [];
    const currentWishlistData = this.getCurrentWishlistData();

    currentWishlistData.splice(msgIndex, 1);
    const newUpdatedWishlist = data.concat(currentWishlistData);
    this.changeWishlistData(newUpdatedWishlist);
  }

  wishlistData(postData: any): Observable<any> {
    console.log('Get Wishlist');
    return this.httpService.getWishlist('api/wishlist', postData);
  }

// delete data from API
  cancelwishlistReq(postData: any): Observable<any> {
      console.log('Cancel Wishlist');
      return this.httpService.delete('api/wishlist', postData);
    }



}
