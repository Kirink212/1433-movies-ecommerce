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
  API_URL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${this.API_URL}movies`);
  }

  createOne(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.API_URL}movies`, movie);
  }

  deleteOne(id: string) {
    return this.http.delete(`${this.API_URL}movies/${id}`);
  }

  uploadImage(file: File): Observable<UploadImageResponse> {
    const formData = new FormData();
    formData.append("imagem", file);
    return this.http.post<UploadImageResponse>(`${this.API_URL}upload`, formData);
  }
}
