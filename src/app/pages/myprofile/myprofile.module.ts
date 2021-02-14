import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyprofilePageRoutingModule } from './myprofile-routing.module';

import { MyprofilePage } from './myprofile.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyprofilePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyprofilePage]
})
export class MyprofilePageModule {}
