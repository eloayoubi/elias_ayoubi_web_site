import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../data/resume';

@Component({
  selector: 'app-project-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>{{ project.title }}</h2>
    <mat-dialog-content>
      <p class="dialog-meta">
        <strong>{{ project.role }}</strong><br />
        {{ project.client }} · {{ project.period }}
      </p>
      <p class="dialog-summary">{{ project.summary }}</p>

      <h3>Aufgaben & Verantwortlichkeiten</h3>
      <ul class="dialog-highlights">
        @for (highlight of project.highlights; track $index) {
          <li>{{ highlight }}</li>
        }
      </ul>

      <h3>Technologien</h3>
      <div class="dialog-chips">
        @for (tech of project.technologies; track tech) {
          <span class="tech-chip">{{ tech }}</span>
        }
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button matButton mat-dialog-close>Schließen</button>
    </mat-dialog-actions>
  `,
  styles: `
    .dialog-meta {
      color: var(--mat-sys-on-surface-variant);

      strong {
        color: var(--mat-sys-primary);
      }
    }

    h3 {
      font: var(--mat-sys-title-small);
      margin: 1.25rem 0 0.5rem;
    }

    .dialog-summary {
      line-height: 1.65;
    }

    .dialog-highlights {
      margin: 0;
      padding-left: 1.2rem;

      li {
        margin-bottom: 0.4rem;
        line-height: 1.55;
      }
    }

    .dialog-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tech-chip {
      font: var(--mat-sys-label-small);
      padding: 0.25rem 0.6rem;
      border-radius: 1rem;
      background: var(--mat-sys-surface-container-high);
      border: 1px solid var(--mat-sys-outline-variant);
    }
  `,
})
export class ProjectDialog {
  protected readonly project = inject<Project>(MAT_DIALOG_DATA);
}
