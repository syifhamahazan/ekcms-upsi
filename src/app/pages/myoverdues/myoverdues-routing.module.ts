import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyoverduesPage } from './myoverdues.page';

const routes: Routes = [
  {
    path: '',
    component: MyoverduesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyoverduesPageRoutingModule {}
