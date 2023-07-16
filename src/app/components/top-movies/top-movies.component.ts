import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movies.interfaces';
import { LikeService } from 'src/app/services/like.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent {
  topMovies: Movie[] = [];

  constructor(
    private moviesService: MoviesService,
    private likeService: LikeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  private loadMovies() {
    const token = sessionStorage.getItem('token') || '';

    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.moviesService.getTopMovies().pipe(
      switchMap(movies => {
        this.topMovies = movies;
        return this.likeService.getLikedMovies(token);
      })
    ).subscribe({
      next: likedMovies => {
        this.topMovies.forEach(movie => {
          movie.liked = likedMovies.includes(movie.id.toString());
        });
      },
      error: (error) => this.redirectToLogin(error),
    });
  }

  toggleLike(movieId: string): void {
    const token = sessionStorage.getItem('token') || '';

    const movie = this.topMovies.find(movie => movie.id === movieId);

    if(!movie?.liked) {
      // Movie is not liked yet, let's enjoy
      this.likeService.likeMovie(movieId, token).subscribe({
        next: () => this.loadMovies(),
        error: (error) => this.redirectToLogin(error),
      });
    } else {
      // Movie is already liked, so let's dislike
      this.likeService.dislikeMovie(movieId, token).subscribe({
        next: () => this.loadMovies(),
        error: (error) => this.redirectToLogin(error),
      });
    }
  }

  private redirectToLogin(error: any): void {
    console.error('Erro na requisição POST:', error);
    this.router.navigate(['/login']);
  }
}
