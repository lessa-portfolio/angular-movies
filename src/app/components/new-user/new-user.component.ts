import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  isEmpty: boolean = false;

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.email !== '' && this.password !== '') {
      this.authService.register(this.name, this.email, this.password)
        .subscribe({
          next: (response) => {
            console.log('Requisição POST bem-sucedida:', response);
            this.router.navigate(['/login']);
          },
          error: (error) => console.error('Erro na requisição POST:', error),
        });
    } else {
      this.isEmpty = true;
      setTimeout(() => this.isEmpty = false, 2000);
    }
  }
}
