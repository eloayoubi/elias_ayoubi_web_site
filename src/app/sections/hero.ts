import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RESUME } from '../data/resume';
import { RevealDirective } from '../shared/reveal.directive';
import { matchMediaSafe } from '../shared/media';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatIconModule, MatChipsModule, RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly resume = RESUME;
  protected readonly typedText = signal('');

  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const reducedMotion = matchMediaSafe('(prefers-reduced-motion: reduce)');
    if (reducedMotion) {
      this.typedText.set(this.resume.taglines[0]);
      return;
    }
    this.runTypewriter();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  protected scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ block: 'start' });
  }

  /** Tippt die Taglines zeichenweise, löscht sie wieder und wechselt zur nächsten. */
  private runTypewriter(phraseIndex = 0, charIndex = 0, deleting = false): void {
    const phrase = this.resume.taglines[phraseIndex];
    let delay: number;

    if (!deleting) {
      charIndex++;
      delay = 65;
      if (charIndex === phrase.length) {
        deleting = true;
        delay = 2200;
      }
    } else {
      charIndex--;
      delay = 30;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % this.resume.taglines.length;
        delay = 350;
      }
    }

    this.typedText.set(phrase.slice(0, charIndex));
    this.timer = setTimeout(() => this.runTypewriter(phraseIndex, charIndex, deleting), delay);
  }
}
