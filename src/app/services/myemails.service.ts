import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MyemailsService {
  emailsData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  changeEmailsdata(data: any) {
    this.emailsData$.next(data);
  }

  emailsData(postData: any): Observable<any> {
    console.log('Get Email');
    return this.httpService.getEmails('api/email', postData);
  }

}
