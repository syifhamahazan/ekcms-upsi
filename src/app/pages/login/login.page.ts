import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

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
    private storageService: StorageService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  // Trim the input postData
  validateInputs(){
    const username = this.postData.username.trim();
    const password = this.postData.password.trim();

    return (this.postData.username && this.postData.password && username.length > 0 && password.length > 0);
  }

  loginAction(){
  if (this.validateInputs()) {
    this.authService.login(this.postData).subscribe((res: any) => {
      // userData depend on name in API
      if (res.userData) {
        // Storing the User data.
        this.storageService.store(AuthConstants.AUTH, res.userData);
        this.router.navigate(['./home/search']);
      } else {
        this.toastService.presentToast('Incorrect username and password');
      }
    },
    (error: any) => {
      this.toastService.presentToast('Network Connection Error.');
    });
  } else {

    this.toastService.presentToast('Please give some information');
  }
  // console.log(this.postData);
  }

}
