import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Declare behaviour subject with dollar sign because cannot call getUserData in every page
  userData$ = new BehaviorSubject<any>('');
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  // Need auth service to access user data, need to call in every page
  getUserData(){
    // connect to storage service
    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log('Iam in getuserdata');
      console.log(res);
      this.userData$.next(res);
    });
  }
  // Observable like promises for rxjs
  login(postData: any): Observable<any>{
    return this.httpService.post('token', postData);
  }

  signup(postData: any){
    return this.httpService.post('signup', postData);
  }

  logout(){
    // get the userdatakey using AUTH
    // do it in promise way since sometimes it may take time
    // to clear off userdata
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
      this.router.navigate(['/login']);
  });

}

}
