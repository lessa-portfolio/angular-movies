import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: homeRoutes
      }
    ])
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
