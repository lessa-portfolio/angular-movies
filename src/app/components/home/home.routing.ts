import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
  {
    path: 'top-movies',
    loadChildren: () => import('../top-movies/top-movies.module').then(m => m.TopMoviesModule)
  },{
    path: 'most-liked-movies',
    loadChildren: () => import('../most-liked-movies/most-liked-movies.module').then(m => m.MostLikedMoviesModule)
  },{
    path: '',
    redirectTo: '/top-movies',
    pathMatch: 'full'
  },
];
