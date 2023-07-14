import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    }])
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
