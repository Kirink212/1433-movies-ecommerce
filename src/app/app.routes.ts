import { Routes } from '@angular/router';
import { MoviesCatalogComponent } from './pages/movies-catalog/movies-catalog.component';
import { MovieRegisterComponent } from './pages/movie-register/movie-register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full'},
    { path: 'movies', component: MoviesCatalogComponent },
    { path: 'movies/add', component: MovieRegisterComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    // { path: 'movies/edit/:id', component: MovieRegisterComponent },
    { path: '**', component: NotFoundComponent },
];
