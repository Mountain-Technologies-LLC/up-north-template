import { Component, Input } from '@angular/core';
import { TextSection } from '../../../data';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.scss'
})
export class TextSectionComponent {
  @Input()
  textSection!: TextSection;
}
