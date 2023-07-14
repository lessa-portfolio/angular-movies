import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMoviesComponent } from './top-movies.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: TopMoviesComponent
    }])
  ],
  exports: [
    TopMoviesComponent
  ]
})
export class TopMoviesModule { }
