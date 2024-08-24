import { Component, Input } from '@angular/core';
import { MainCenteredSection } from '../../../../../data';

@Component({
  selector: 'app-main-centered-section',
  standalone: true,
  imports: [],
  templateUrl: './main-centered-section.component.html',
})
export class MainCenteredSectionComponent {
  @Input()
  mainCenteredSection!: MainCenteredSection;
}
