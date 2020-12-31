import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyloanhistoryPageRoutingModule } from './myloanhistory-routing.module';

import { MyloanhistoryPage } from './myloanhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyloanhistoryPageRoutingModule
  ],
  declarations: [MyloanhistoryPage]
})
export class MyloanhistoryPageModule {}
