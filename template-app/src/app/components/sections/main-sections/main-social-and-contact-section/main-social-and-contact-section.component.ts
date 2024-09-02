import { Component, input } from '@angular/core';
import { MainSocialAndContactSection } from '../../../../../data';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-social-and-contact-section',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './main-social-and-contact-section.component.html',
})
export class MainSocialAndContactSectionComponent {
  mainSocialAndContactSection = input<MainSocialAndContactSection>();
}
