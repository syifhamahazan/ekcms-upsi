import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysearchhistoryPageRoutingModule } from './mysearchhistory-routing.module';

import { MysearchhistoryPage } from './mysearchhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysearchhistoryPageRoutingModule
  ],
  declarations: [MysearchhistoryPage]
})
export class MysearchhistoryPageModule {}
