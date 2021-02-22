import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ModalController } from '@ionic/angular'; {causing error on navigation}
import { IonicModule } from '@ionic/angular';


import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // ModalController
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
