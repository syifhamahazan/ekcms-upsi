import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.page.html',
  styleUrls: ['./mywishlist.page.scss'],
})
export class MywishlistPage implements OnInit {

  constructor(private modalContoller: ModalController) { }

  async openModel(){
  }
  ngOnInit() {
  }

}
