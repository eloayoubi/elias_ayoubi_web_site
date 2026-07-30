import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RESUME } from '../data/resume';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly resume = RESUME;
}
