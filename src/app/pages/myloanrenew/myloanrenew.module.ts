import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyloanrenewPageRoutingModule } from './myloanrenew-routing.module';

import { MyloanrenewPage } from './myloanrenew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyloanrenewPageRoutingModule
  ],
  declarations: [MyloanrenewPage]
})
export class MyloanrenewPageModule {}
