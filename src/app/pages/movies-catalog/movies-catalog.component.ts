import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MoviesService } from '../../services/movies.service';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-movies-catalog',
  imports: [MatCardModule, MatIcon, MatIconButton],
  templateUrl: './movies-catalog.component.html',
  styleUrl: './movies-catalog.component.css',
})
export class MoviesCatalogComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.moviesService.getAll().subscribe((movies: Array<Movie>) => {
      this.movies = movies;
    })
  }
}
