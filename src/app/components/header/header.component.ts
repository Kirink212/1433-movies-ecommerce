import { Component, Input, OnInit } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButton, MatIcon, MatIconButton, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @Input() drawer!: MatDrawer;

  constructor(private authService: AuthService, private translateService: TranslateService) {}

  ngOnInit(): void {
    const currentLang = localStorage.getItem("selectedLang");
    this.translateService.use(currentLang ?? this.translateService.getCurrentLang());
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logoutCurrentUser() {
    this.authService.logout();
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang).subscribe(() => {
      localStorage.setItem("selectedLang", lang);
    });
  }
}
