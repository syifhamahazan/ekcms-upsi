import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyoverduesPageRoutingModule } from './myoverdues-routing.module';

import { MyoverduesPage } from './myoverdues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyoverduesPageRoutingModule
  ],
  declarations: [MyoverduesPage]
})
export class MyoverduesPageModule {}
