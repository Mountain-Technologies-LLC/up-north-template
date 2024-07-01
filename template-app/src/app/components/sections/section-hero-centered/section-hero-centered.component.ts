import { Component, Input } from '@angular/core';
import { SectionHeroCentered } from '../../../data';

@Component({
  selector: 'app-section-hero-centered',
  standalone: true,
  imports: [],
  templateUrl: './section-hero-centered.component.html',
  styleUrl: './section-hero-centered.component.scss'
})
export class SectionHeroCenteredComponent {
  @Input()
  sectionHeroCentered!: SectionHeroCentered;
}
