import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpwdPage } from './editpwd.page';

const routes: Routes = [
  {
    path: '',
    component: EditpwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpwdPageRoutingModule {}
