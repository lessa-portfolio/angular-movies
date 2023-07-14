import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'top-movies',
    loadChildren: () => import('./components/top-movies/top-movies.module').then(m => m.TopMoviesModule)
  },{
    path: 'most-liked-movies',
    loadChildren: () => import('./components/most-liked-movies/most-liked-movies.module').then(m => m.MostLikedMoviesModule)
  },{
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },{
    path: '',
    redirectTo: '/top-movies',
    pathMatch: 'full'
  },
];
