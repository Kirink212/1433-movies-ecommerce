import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRegisterComponent } from './movie-register.component';

describe('MovieRegisterComponent', () => {
  let component: MovieRegisterComponent;
  let fixture: ComponentFixture<MovieRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
