import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  likeMovie(movieId: string, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post('https://lessa-portfolio.com.br/likes/like', { movieId }, { headers });
  }

  dislikeMovie(movieId: string, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post('https://lessa-portfolio.com.br/likes/dislike', { movieId }, { headers });
  }

  getLikedMovies(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('https://lessa-portfolio.com.br/likes', { headers });
  }
}
