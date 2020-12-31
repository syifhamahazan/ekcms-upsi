import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyloanrenewPage } from './myloanrenew.page';

const routes: Routes = [
  {
    path: '',
    component: MyloanrenewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyloanrenewPageRoutingModule {}
