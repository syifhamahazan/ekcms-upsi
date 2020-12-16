import { NgModule } from '@angular/core';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchInputComponent } from './search-input/search-input.component';


@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, SearchInputComponent],
  exports:[SlidesComponent, StartComponent, LogoComponent, SearchInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
