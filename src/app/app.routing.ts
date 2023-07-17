import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },{
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },{
    path: 'register',
    loadChildren: () => import('./components/new-user/new-user.module').then(m => m.NewUserModule)
  },{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];
