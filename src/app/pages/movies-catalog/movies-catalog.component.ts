import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from '../../components/movie-card.component/movie-card.component';

@Component({
  selector: 'app-movies-catalog',
  imports: [MovieCardComponent],
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
