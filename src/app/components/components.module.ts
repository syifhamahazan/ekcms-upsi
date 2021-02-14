import { NgModule } from '@angular/core';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchbyareaComponent } from './modals/searchbyarea/searchbyarea.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { WishlistCardComponent } from './wishlist-card/wishlist-card.component';
import { LoanCardComponent } from './loan-card/loan-card.component';

@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, 
    SearchbyareaComponent, ProfileCardComponent, WishlistCardComponent, LoanCardComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent,
    SearchbyareaComponent, ProfileCardComponent, WishlistCardComponent, LoanCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
