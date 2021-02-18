import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchhistService {

  constructor(private httpService: HttpService) { }

  searchhistData(postData: any): Observable<any>{
    console.log('Postdata is');
    console.log(postData);
    return this.httpService.getSearchhist('api/searchhistory', postData);
  }

}

