import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OpacSearchService {
  searchData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  opacSearchRes(postData: any): Observable<any> {
    console.log('Get Search Result');
    return this.httpService.getSearch('api/material', postData);

  }
}
