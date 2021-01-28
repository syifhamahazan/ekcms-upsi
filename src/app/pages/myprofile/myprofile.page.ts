import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyprofileService } from 'src/app/services/myprofile.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  public authUser: any;
  postData = {
    AccessionNo: 'root',
    token: ''
  };

  constructor(
    private auth: AuthService,
    private profileService: MyprofileService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log('aaaaaaaaaa');
      console.log(res);
      this.getProfile();
  });

    
}

getProfile(){
  this.postData.token = this.authUser;
  console.log(this.postData);
  this.profileService.profileData(this.postData).subscribe(
      (res: any) => {
       console.log(res);
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  
}

}

