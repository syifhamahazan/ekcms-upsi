import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { WishlistReqComponent } from './wishlist/wishlist-req/wishlist-req.component';
import { SearchAreaComponent } from './search-area/search-area.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [WishlistReqComponent, IonicModule, SearchAreaComponent],
  declarations: [ModalPage, WishlistReqComponent, SearchAreaComponent]
})
export class ModalPageModule {}
