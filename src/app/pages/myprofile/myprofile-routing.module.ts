import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofilePage } from './myprofile.page';

const routes: Routes = [
  {
    path: '',
    component: MyprofilePage
  },
  {
    path: 'profilepic',
    loadChildren: () => import('./profilepic/profilepic.module').then( m => m.ProfilepicPageModule)
  },
  {
    path: 'editpwd',
    loadChildren: () => import('./editpwd/editpwd.module').then( m => m.EditpwdPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyprofilePageRoutingModule {}
