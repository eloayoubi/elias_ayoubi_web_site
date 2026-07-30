import { Component } from '@angular/core';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Experience } from './sections/experience';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';
import { Education } from './sections/education';
import { Contact } from './sections/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, About, Experience, Projects, Skills, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
