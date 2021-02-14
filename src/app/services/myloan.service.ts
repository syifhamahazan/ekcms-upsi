import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MyloanService {
  loanData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  changeLoanData(data: any) {
    this.loanData$.next(data);
  }

  loanData(postData: any): Observable<any> {
    console.log('Get Loan');
    return this.httpService.getLoan('api/loan', postData);
  }



}
