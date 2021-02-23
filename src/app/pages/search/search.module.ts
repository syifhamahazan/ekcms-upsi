import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchAreaComponent } from 'src/app/modal/search-area/search-area.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchPage],
  entryComponents: [SearchAreaComponent]

})
export class SearchPageModule {}
