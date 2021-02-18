import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysearchhistoryPageRoutingModule } from './mysearchhistory-routing.module';

import { MysearchhistoryPage } from './mysearchhistory.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysearchhistoryPageRoutingModule,
    ComponentsModule

  ],
  declarations: [MysearchhistoryPage]
})
export class MysearchhistoryPageModule {}
