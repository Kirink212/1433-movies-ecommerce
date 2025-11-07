import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-register',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelect, MatOption, ReactiveFormsModule],
  templateUrl: './movie-register.component.html',
  styleUrl: './movie-register.component.css',
})
export class MovieRegisterComponent {
  formGroup!: FormGroup;
  platforms: Array<string> = [
    "In Theaters",
    "Streaming",
    "On Demand",
  ];
  genres: Array<string> = [
    "Action",
    "Drama",
    "Science Fiction",
    "Thriller",
    "Romance",
    "Horror",
  ];

  constructor(private moviesService: MoviesService, private router: Router, private matSnackBar: MatSnackBar) {
    this.formGroup = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.maxLength(50)]),
      genre: new FormControl("", [Validators.required]),
      platform: new FormControl("", [Validators.required]),
      imageLink: new FormControl(),
      price: new FormControl<number | null>(null, [Validators.min(0.01)]),
      description: new FormControl(),
      availableInStock: new FormControl<number | null>(null, [Validators.min(1)]),
    });
  }

  onSubmit() {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return;
    };

    const movieData: Movie = this.formGroup.value;
    this.moviesService.createOne(movieData).subscribe((movie: Movie) => {
      this.matSnackBar.open(`O filme '${movie.title}' foi criado com sucesso!`, "Fechar");
      this.router.navigate(['']);
    });
  }
}
