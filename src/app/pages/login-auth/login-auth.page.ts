import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.page.html',
  styleUrls: ['./login-auth.page.scss'],
})
export class LoginAuthPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginAction(){
    this.router.navigate(['./home/search']);
   // alert('hello');
   // if (this.validateInput()){
   //   // this.authService.login(this.postData).subscribe([res: any] =>{
 
   //   // })
   // }else{
 
   //   console.log('Please give some information');
   // }
   }
 
}
