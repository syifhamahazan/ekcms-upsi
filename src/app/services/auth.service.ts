import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  // Observable like promises for rxjs
  login(postData: any): Observable<any>{
    return this.httpService.post('login', postData);
  }

  signup(postData: any){
    return this.httpService.post('signup', postData);
  }

  logout(){
    // get the userdatakey using AUTH
    // do it in promise way since sometimes it may take time
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
    this.router.navigate(['/login']);
  });

}

}
