import { Component } from '@angular/core';
import { Movie } from './interfaces/movies.interfaces';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
