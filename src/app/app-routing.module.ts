import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // set entry point
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./pages/search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
  {
    path: 'advance-search',
    loadChildren: () => import('./pages/advance-search/advance-search.module').then( m => m.AdvanceSearchPageModule)
  },
  {
    path: 'rbr-search',
    loadChildren: () => import('./pages/rbr-search/rbr-search.module').then( m => m.RbrSearchPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
