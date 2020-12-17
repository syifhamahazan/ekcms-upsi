import { NgModule } from '@angular/core';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchbyareaComponent } from './modals/searchbyarea/searchbyarea.component';

@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, SearchInputComponent, SearchbyareaComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent, SearchInputComponent, SearchbyareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
