import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }
  searchAction(){
    this.router.navigate(['./home/search-result']);
    //  alert('hello');
   }
  mywishlist(){
    this.router.navigate(['./home/mywishlist']);
  }
  myloanhist(){
    this.router.navigate(['./home/myloanhistory']);
  }
  myoverdues(){
    this.router.navigate(['./home/myoverdues']);
  }
  mysearchhist(){
    this.router.navigate(['./home/mysearchhistory']);
  }
  myprofile(){
    this.router.navigate(['./home/myprofile']);
  }
  serachField(){
    this.router.navigate(['./home/search']);
  }
  myloan(){
    this.router.navigate(['./home/myloanrenew']);
  }
  myrsv(){
    this.router.navigate(['./home/myreservation']);
  }
  logout(){
    this.router.navigate(['./home/logout']);
  }

  async logoutAction() {
    const alert = await this.alertController.create({
      header: 'Oh no! You are leaving...',
      message: '<strong>Are you sure ?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['./login']);
          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
