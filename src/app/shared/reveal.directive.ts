import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';
import { matchMediaSafe } from './media';

/**
 * Blendet Elemente sanft ein, sobald sie in den Viewport scrollen.
 * Nutzt IntersectionObserver + CSS-Transitions; bei `prefers-reduced-motion`
 * wird der Inhalt sofort ohne Animation angezeigt.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Verzögerung in ms – für gestaffelte Listen-Animationen. */
  readonly revealDelay = input(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const element = this.el.nativeElement;
    const reducedMotion = matchMediaSafe('(prefers-reduced-motion: reduce)');

    if (reducedMotion || !('IntersectionObserver' in window)) {
      element.classList.add('reveal--visible');
      return;
    }

    element.style.transitionDelay = `${this.revealDelay()}ms`;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('reveal--visible');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
