import { Injectable, signal, effect } from '@angular/core';
import { matchMediaSafe } from '../shared/media';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'ea-portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly mode = signal<ThemeMode>(this.initialMode());

  constructor() {
    effect(() => {
      const mode = this.mode();
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem(STORAGE_KEY, mode);
    });
  }

  toggle(): void {
    this.mode.update((m) => (m === 'light' ? 'dark' : 'light'));
  }

  private initialMode(): ThemeMode {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return matchMediaSafe('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  }
}
