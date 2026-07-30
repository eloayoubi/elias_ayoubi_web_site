import { Component, computed, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Project, RESUME } from '../data/resume';
import { RevealDirective } from '../shared/reveal.directive';
import { ProjectDialog } from './project-dialog';

type Filter = 'Alle' | Project['category'];

@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RevealDirective,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly dialog = inject(MatDialog);

  protected readonly filters: Filter[] = ['Alle', 'Mobile', 'Web', 'Design', 'Backend', 'IoT'];
  protected readonly activeFilter = signal<Filter>('Alle');

  protected readonly projects = computed(() => {
    const filter = this.activeFilter();
    const all = RESUME.projects;
    return filter === 'Alle' ? all : all.filter((p) => p.category === filter);
  });

  protected readonly categoryIcons: Record<Project['category'], string> = {
    Mobile: 'smartphone',
    Web: 'language',
    Design: 'palette',
    Backend: 'dns',
    IoT: 'sensors',
  };

  protected setFilter(filter: Filter): void {
    this.activeFilter.set(filter);
  }

  protected openDetails(project: Project): void {
    this.dialog.open(ProjectDialog, {
      data: project,
      maxWidth: 'min(40rem, 92vw)',
      autoFocus: 'dialog',
    });
  }
}
