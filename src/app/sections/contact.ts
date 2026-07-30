import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RESUME } from '../data/resume';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatButtonModule, MatIconModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly resume = RESUME;
  protected readonly telHref = 'tel:+49' + RESUME.contact.phone.replace(/\s/g, '').replace(/^0/, '');
  protected readonly mailHref = 'mailto:' + RESUME.contact.email;
}
