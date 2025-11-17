import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.checkLoginExpiration();
  }
}
