import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Movie } from '../../models/movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieDeleteDialogComponent } from '../movie-delete-dialog.component/movie-delete-dialog.component';
import { MoviesService } from '../../services/movies.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatIcon, MatIconButton],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() deleteCard: EventEmitter<string> = new EventEmitter();

  constructor(private dialog: MatDialog, private moviesService: MoviesService, private snackBar: MatSnackBar) {

  }

  confirmDelete() {
    const dialogRef = this.dialog.open(MovieDeleteDialogComponent, {
      data: {
        title: this.movie.title
      }
    });

    dialogRef
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (!confirm) return;

        this.moviesService.deleteOne(this.movie.id).subscribe({
          next: () => {
            this.snackBar.open('Filme excluído com sucesso!', 'Fechar', {
              horizontalPosition: "end",
              verticalPosition: "top",
              duration: 3000
            });

            this.deleteCard.emit(this.movie.id);
          },
          error: () => {
            this.snackBar.open('Não foi possível excluir o filme.', 'Fechar', {
              horizontalPosition: "end",
              verticalPosition: "top",
              duration: 3000
            });
          }
        })
      })
  }
}
