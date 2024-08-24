import { Component, Input } from '@angular/core';
import { MainSocialAndContactSection } from '../../../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-social-and-contact-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-social-and-contact-section.component.html',
})
export class MainSocialAndContactSectionComponent {
  @Input()
  mainSocialAndContactSection!: MainSocialAndContactSection;
}
