import { NgModule } from '@angular/core';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, MenuComponent],
  exports:[SlidesComponent, StartComponent, LogoComponent, MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
