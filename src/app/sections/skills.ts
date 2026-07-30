import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RESUME } from '../data/resume';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [MatCardModule, MatIconModule, MatChipsModule, RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly resume = RESUME;
}
