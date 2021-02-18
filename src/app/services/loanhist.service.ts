import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class LoanhistService {
  loanhistData$ = new BehaviorSubject<any>([]);

  constructor(private httpService: HttpService) { }

  changeloanhistData(data: any) {
    this.loanhistData$.next(data);
  }

  loanhistData(postData: any): Observable<any> {
    console.log('Get Loan History');
    return this.httpService.getWishlist('api/loanhistory', postData);
  }

}
