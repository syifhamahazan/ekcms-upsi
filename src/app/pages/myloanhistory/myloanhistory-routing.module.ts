import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyloanhistoryPage } from './myloanhistory.page';

const routes: Routes = [
  {
    path: '',
    component: MyloanhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyloanhistoryPageRoutingModule {}
