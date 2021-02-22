import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfinesPage } from './myfines.page';

const routes: Routes = [
  {
    path: '',
    component: MyfinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfinesPageRoutingModule {}
