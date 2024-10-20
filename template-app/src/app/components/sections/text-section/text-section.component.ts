import { Component, Input } from '@angular/core';
import { TextSection } from '../../../../schema';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [],
  templateUrl: './text-section.component.html',
})
export class TextSectionComponent {
  @Input()
  textSection!: TextSection;
}
