import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MoviesResponse } from '../interfaces/movies.interfaces';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // Substitua por sua chave de API aqui!
  private readonly apiKey = `b4016224ea90dc523669a794dc2764e4`;
  private readonly baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getTopMovies(): Observable<Movie[]> {
    return this.http.get<MoviesResponse>(`${ this.baseUrl }&language=pt-BR&region=BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000`)
      .pipe(
        map((response: MoviesResponse): Movie[] => response.results),
        map((movies: Movie[]): Movie[] => movies.map((movie: Movie) => {
          return {
            ...movie,
            posterUrl: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
          }
        })),
        catchError(error => {
          console.error('Erro ao buscar os filmes:', error);
          return [];
        })
      );
  }

  getMoreLikedMovies():Observable<any[]> {
    return this.http.get<any>('https://lessa-portfolio.com.br/movies');
  }
}
