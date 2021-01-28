import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor(private httpService: HttpService) { }

  profileData(postData: any): Observable<any>{
    console.log(postData);
    return this.httpService.getProfile('api/patron', postData);
  }
}
