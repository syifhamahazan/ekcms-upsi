import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyreservationPageRoutingModule } from './myreservation-routing.module';

import { MyreservationPage } from './myreservation.page';

import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyreservationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyreservationPage]
})
export class MyreservationPageModule {}
