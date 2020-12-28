import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbrSearchPage } from './rbr-search.page';

const routes: Routes = [
  {
    path: '',
    component: RbrSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RbrSearchPageRoutingModule {}
