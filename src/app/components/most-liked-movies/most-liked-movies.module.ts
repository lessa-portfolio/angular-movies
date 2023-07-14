import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostLikedMoviesComponent } from './most-liked-movies.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MostLikedMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MostLikedMoviesComponent
    }])
  ],
  exports: [
    MostLikedMoviesComponent
  ]
})
export class MostLikedMoviesModule { }
