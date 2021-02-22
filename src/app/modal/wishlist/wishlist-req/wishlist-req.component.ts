import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wishlist-req',
  templateUrl: './wishlist-req.component.html',
  styleUrls: ['./wishlist-req.component.scss'],
})
export class WishlistReqComponent implements OnInit {

  required = new FormControl('', Validators.required);

  constructor(private modalContoller: ModalController) { }

  ngOnInit() {

  }

  dismissModal(){
    this.modalContoller.dismiss();
  }

  wishlistReq(){

  }

}
