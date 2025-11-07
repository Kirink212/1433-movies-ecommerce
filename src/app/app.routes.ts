import { Routes } from '@angular/router';
import { MoviesCatalogComponent } from './pages/movies-catalog/movies-catalog.component';
import { MovieRegisterComponent } from './pages/movie-register/movie-register.component';

export const routes: Routes = [
    { path: '', component: MoviesCatalogComponent },
    { path: 'movies/add', component: MovieRegisterComponent },
];
