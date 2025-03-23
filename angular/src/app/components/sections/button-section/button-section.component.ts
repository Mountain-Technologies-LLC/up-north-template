import { Component, Input } from '@angular/core';
import { ButtonSection } from '../../../../schema';

@Component({
  selector: 'app-button-section',
  imports: [],
  templateUrl: './button-section.component.html'
})
export class ButtonSectionComponent {
  @Input()
  buttonSection!: ButtonSection;
}
