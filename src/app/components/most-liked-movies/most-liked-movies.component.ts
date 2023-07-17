import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movies.interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-most-liked-movies',
  templateUrl: './most-liked-movies.component.html',
  styleUrls: ['./most-liked-movies.component.scss']
})
export class MostLikedMoviesComponent {
  likedMovies: Movie[] = [];

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  private loadMovies() {
    this.moviesService.getTopMovies().pipe(
      switchMap(movies => {
        this.likedMovies = movies.slice(0, 10);;
        return this.moviesService.getMoreLikedMovies();
      })
    ).subscribe({
      next: likedMovies => {
        console.log('likedMovies: ', likedMovies);

        this.likedMovies.forEach(movie => {
          const matchedItem = likedMovies.find(item => item.ref === movie.id.toString());
          if (matchedItem) movie.userCount = matchedItem.userCount;
        });

        // @ts-ignore
        this.likedMovies.sort((a, b) => b.userCount - a.userCount);
      },
    });
  }
}
