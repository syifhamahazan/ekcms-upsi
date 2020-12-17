import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
// import { SearchbyareaComponent } from 'src/app/components/modals/searchbyarea/searchbyarea.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  search(){
  this.router.navigate(['./home/search']);
  //  alert('hello');
 }

//  async openModal() {
//   const modal = await this.modalCtrl.create({
//   component: SearchbyareaComponent
//   });

//   await modal.present();
//  }

}
