import { NgModule } from '@angular/core';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchbyareaComponent } from './modals/searchbyarea/searchbyarea.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { WishlistCardComponent } from './wishlist-card/wishlist-card.component';
import { LoanCardComponent } from './loan-card/loan-card.component';
import { LoanhistCardComponent } from './loanhist-card/loanhist-card.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { OverdueCardComponent } from './overdue-card/overdue-card.component';
import { SearchistCardComponent } from './searchist-card/searchist-card.component';

@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, LoanhistCardComponent, ReservationCardComponent, OverdueCardComponent,
    SearchbyareaComponent, ProfileCardComponent, WishlistCardComponent, LoanCardComponent, SearchistCardComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent, LoanhistCardComponent, ReservationCardComponent, OverdueCardComponent,
    SearchbyareaComponent, ProfileCardComponent, WishlistCardComponent, LoanCardComponent, SearchistCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
