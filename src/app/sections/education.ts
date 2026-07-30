import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RESUME } from '../data/resume';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [MatCardModule, MatIconModule, RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly resume = RESUME;
}
