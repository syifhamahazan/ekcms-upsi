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
        loadChildren: '../search/search.module'
      },
      {
        path: 'wishlist',
        loadChildren: '../mywishlist/mywishlist.module'
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
