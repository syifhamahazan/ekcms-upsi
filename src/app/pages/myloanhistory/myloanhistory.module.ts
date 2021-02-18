import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyloanhistoryPageRoutingModule } from './myloanhistory-routing.module';

import { MyloanhistoryPage } from './myloanhistory.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyloanhistoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyloanhistoryPage]
})
export class MyloanhistoryPageModule {}
