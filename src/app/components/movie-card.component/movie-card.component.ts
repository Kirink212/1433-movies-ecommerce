import { Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Movie } from '../../models/movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieDeleteDialogComponent } from '../movie-delete-dialog.component/movie-delete-dialog.component';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatIcon, MatIconButton],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(private dialog: MatDialog) {

  }

  confirmDelete() {
    const dialogRef = this.dialog.open(MovieDeleteDialogComponent, {
      data: {
        title: this.movie.title
      }
    });
  }
}
