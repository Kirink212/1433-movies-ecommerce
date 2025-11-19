import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-delete-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './movie-delete-dialog.component.html',
  styleUrl: './movie-delete-dialog.component.css',
})
export class MovieDeleteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {}
}
