import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MyfinesService {
  finesData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  changeFinesData(data: any) {
    this.finesData$.next(data);
  }

  finesData(postData: any): Observable<any> {
    console.log('Get Loan');
    return this.httpService.getFines('api/fines', postData);
  }

}
