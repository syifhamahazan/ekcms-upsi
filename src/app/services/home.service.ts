import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpService) { }

  homeData(postData: any): Observable<any>{
    return this.httpService.post('api', postData);
  }
}
