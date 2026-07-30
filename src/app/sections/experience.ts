import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RESUME } from '../data/resume';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [MatCardModule, RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly resume = RESUME;
}
