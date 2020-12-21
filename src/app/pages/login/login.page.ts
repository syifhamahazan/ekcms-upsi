import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public postData = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService) { }

  ngOnInit() {
  }

  validateInput(){
    const username = this.postData.username.trim();
    const password = this.postData.password.trim();

    return (this.postData.username && this.postData.password && username.length > 0 && password.length > 0);
  }

  loginAction(){
  //  this.router.navigate(['./home/search']);
  // alert('hello');
  if (this.validateInput()){
    // this.authService.login(this.postData).subscribe([res: any] =>{

    // })
  }else{

    console.log('Please give some information');
  }
  }

}
