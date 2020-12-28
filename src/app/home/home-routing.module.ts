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
        path: 'search-result',
        loadChildren: () =>
          import('../pages/search-result/search-result.module').then(
            m => m.SearchResultPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
