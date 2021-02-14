import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpwdPageRoutingModule } from './editpwd-routing.module';

import { EditpwdPage } from './editpwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpwdPageRoutingModule
  ],
  declarations: [EditpwdPage]
})
export class EditpwdPageModule {}
