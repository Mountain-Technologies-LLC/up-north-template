import { Component, Input } from '@angular/core';
import { MainCenteredSection } from '../../../../../schema';

@Component({
  selector: 'app-main-centered-section',
  templateUrl: './main-centered-section.component.html',
})
export class MainCenteredSectionComponent {
  @Input()
  mainCenteredSection!: MainCenteredSection;
}
