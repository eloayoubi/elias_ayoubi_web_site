import { Component } from '@angular/core';
import { RESUME } from '../data/resume';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="section-container footer-inner">
        <p>© {{ year }} {{ resume.name }} · {{ resume.contact.location }}</p>
        <p class="footer-note">Erstellt mit Angular 22 & Angular Material · Gehostet auf GitHub Pages</p>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--mat-sys-outline-variant);
      margin-top: 2rem;
    }

    .footer-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.5rem 2rem;
      padding-top: 1.5rem;
      padding-bottom: 2rem;

      p {
        margin: 0;
        font: var(--mat-sys-body-small);
        color: var(--mat-sys-on-surface-variant);
      }
    }
  `,
})
export class Footer {
  protected readonly resume = RESUME;
  protected readonly year = new Date().getFullYear();
}
