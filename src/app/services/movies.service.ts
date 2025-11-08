import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

type UploadImageResponse = {
  imageUrl: string;
  path?: string;
}

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

  uploadImage(file: File): Observable<UploadImageResponse> {
    const formData = new FormData();
    formData.append("imagem", file);
    return this.http.post<UploadImageResponse>("http://localhost:3000/upload", formData);
  }
}
