import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[
      {
        path:'',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/welcome/welcome.module').then(
                m => m.WelcomePageModule)
          },
          {
            path: 'login',
            loadChildren: () =>
              import('../pages/login/login.module').then(
                m => m.LoginPageModule)
           },
          {
            path: 'signup',
            loadChildren: () =>
              import('../pages/signup/signup.module').then(
                m => m.SignupPageModule )
           },
           {
            path: 'forgot',
            loadChildren: () =>
              import('../pages/forgot/forgot.module').then(
                m => m.ForgotPageModule )
           }
          
        ] 
     
      } 
    ]
  }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
