import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MyoverdueService {
  overdueData$ = new BehaviorSubject<any>([]);


  constructor(private httpService: HttpService) { }

  changeoverdueData(data: any) {
    this.overdueData$.next(data);
  }

  changeWishlistData(data: any) {
    this.overdueData$.next(data);
  }

  overdueData(postData: any): Observable<any> {
    console.log('Get Overdue');
    return this.httpService.getOverdue('api/overdue', postData);
  }

}
