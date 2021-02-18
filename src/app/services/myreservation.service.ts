import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class MyreservationService {
  reservationData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  changeReservationData(data: any){
    this.reservationData$.next(data);
  }

  reservationData(postData: any): Observable<any>{
    console.log('Postdata is');
    console.log(postData);
    return this.httpService.getReservation('api/reservation', postData);
  }
}
