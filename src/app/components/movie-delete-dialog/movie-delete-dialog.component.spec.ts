import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDeleteDialogComponent } from './movie-delete-dialog.component';

describe('MovieDeleteDialogComponent', () => {
  let component: MovieDeleteDialogComponent;
  let fixture: ComponentFixture<MovieDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
