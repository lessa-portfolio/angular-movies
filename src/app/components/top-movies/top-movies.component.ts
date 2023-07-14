import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies.interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent {
  topMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTopMovies()
      .subscribe({
        next: movies => this.topMovies = movies.slice(0, 10),
        error: error => console.error(error)
      });
  }
}
