import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movies.interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent {
  topMovies: Movie[] = [];
  likedMovies: string[] = [];

  constructor(
    private moviesService: MoviesService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.moviesService.getTopMovies().subscribe({
      next: movies => this.topMovies = movies.slice(0, 10),
      error: error => console.error(error)
    });
  }

  public sendRequest(movieId: string): void {
    const token = sessionStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    if(!this.likedMovies.includes(movieId)) {
      this.http.post('http://localhost:3000/likes', { movieId }, { headers }).subscribe({
        next: () => {
          this.likedMovies.push(movieId),
          console.log(`adicionei ${ movieId } no array ${ this.likedMovies }`);
        },
        error: (error) => {
          console.error('Erro na requisição POST:', error);
          if(error.message == 'Token expired' || 'Invalid token') {
            this.router.navigate(['/login']);
          }
        }
      });
    } else {
      this.http.post('http://localhost:3000/dislikes', { movieId }, { headers }).subscribe({
        next: () => {
          this.likedMovies.filter(item => item !== movieId);
          console.log(`removi ${ movieId } no array ${ this.likedMovies }`);
        },
        error: (error) => {
          console.error('Erro na requisição POST:', error);
          if(error.message == 'Token expired' || 'Invalid token') {
            this.router.navigate(['/login']);
          }
        }
      });
    }
  }
}
