import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchInputComponent } from './search-input.component';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [CommonModule, IonicModule],
  exports: [SearchInputComponent],
})
export class InputModule {}
