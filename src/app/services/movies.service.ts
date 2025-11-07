import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>("http://localhost:3000/movies");
  }

  createOne(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>("http://localhost:3000/movies", movie);
  }
}
