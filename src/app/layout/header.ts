import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../core/theme.service';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly theme = inject(ThemeService);

  protected readonly links: NavLink[] = [
    { label: 'Über mich', fragment: 'ueber-mich' },
    { label: 'Werdegang', fragment: 'werdegang' },
    { label: 'Projekte', fragment: 'projekte' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Bildung', fragment: 'bildung' },
    { label: 'Kontakt', fragment: 'kontakt' },
  ];

  protected scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ block: 'start' });
  }
}
