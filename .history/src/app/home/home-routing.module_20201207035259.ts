import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('../pages/search/search.module').then(
            m => m.SearchPageModule)
      },
      {
        path: 'mywishlist',
        loadChildren: () =>
          import('../pages/mywishlist/mywishlist.module').then(
            m => m.MywishlistPageModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
