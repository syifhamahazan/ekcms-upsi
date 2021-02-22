import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfinesPageRoutingModule } from './myfines-routing.module';

import { MyfinesPage } from './myfines.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    MyfinesPageRoutingModule
  ],
  declarations: [MyfinesPage]
})
export class MyfinesPageModule {}
