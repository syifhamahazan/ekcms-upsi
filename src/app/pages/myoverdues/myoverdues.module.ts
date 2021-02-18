import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyoverduesPageRoutingModule } from './myoverdues-routing.module';

import { MyoverduesPage } from './myoverdues.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyoverduesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyoverduesPage]
})
export class MyoverduesPageModule {}
