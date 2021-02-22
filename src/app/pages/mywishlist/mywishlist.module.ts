import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishlistPageRoutingModule } from './mywishlist-routing.module';

import { MywishlistPage } from './mywishlist.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { WishlistReqComponent } from 'src/app/modal/wishlist/wishlist-req/wishlist-req.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    MywishlistPageRoutingModule,
    ReactiveFormsModule  ],
  declarations: [MywishlistPage],
  entryComponents: [WishlistReqComponent]
})
export class MywishlistPageModule {}
