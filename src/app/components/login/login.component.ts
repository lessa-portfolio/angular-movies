import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isEmpty: boolean = false;

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.email !== '' && this.password !== '') {
      console.log('entrou no if');

      this.authService.login(this.email, this.password)
        .subscribe({
          next: (response) => {
            console.log('Requisição POST bem-sucedida:', response);
            const token = response.token;
            sessionStorage.setItem('token', token);
            this.router.navigate(['/top-movies']);
          },
          error: (error) => {
            console.error('Erro na requisição POST:', error);
          }
        })
    } else {
      this.isEmpty = true;
      setTimeout(() => this.isEmpty = false, 2000);
    }
  }
}
