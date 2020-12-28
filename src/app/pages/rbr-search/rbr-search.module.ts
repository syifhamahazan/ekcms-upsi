import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RbrSearchPageRoutingModule } from './rbr-search-routing.module';

import { RbrSearchPage } from './rbr-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RbrSearchPageRoutingModule
  ],
  declarations: [RbrSearchPage]
})
export class RbrSearchPageModule {}
