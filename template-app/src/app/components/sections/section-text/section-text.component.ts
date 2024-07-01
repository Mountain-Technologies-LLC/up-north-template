import { Component, Input } from '@angular/core';
import { SectionText } from '../../../data';

@Component({
  selector: 'app-section-text',
  standalone: true,
  imports: [],
  templateUrl: './section-text.component.html',
  styleUrl: './section-text.component.scss'
})
export class SectionTextComponent {
  @Input()
  sectionText!: SectionText;
}
