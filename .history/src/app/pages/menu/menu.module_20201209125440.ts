import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:'menu',
    component: MenuPage,
    children:[
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.IndexPageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../mywishlist/mywishlist.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'/menu/search'
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
