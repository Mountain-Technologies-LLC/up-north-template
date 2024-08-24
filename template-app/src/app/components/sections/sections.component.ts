import { Component, Input } from '@angular/core';
import { Section } from '../../data';
import { NgFor, NgIf } from '@angular/common';
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { GridSectionComponent } from "./grid-section/grid-section.component";
import { ImageSectionComponent } from "./image-section/image-section.component";
import { MainCenteredSectionComponent } from "./main-sections/main-centered-section/main-centered-section.component";
import { MainImageSectionComponent } from './main-image-section/main-image-section.component';
import { MainSocialAndContactSectionComponent } from "./main-sections/main-social-and-contact-section/main-social-and-contact-section.component";
import { OfferSectionComponent } from "./offer-section/offer-section.component";
import { TextSectionComponent } from "./text-section/text-section.component";

@Component({
    selector: 'app-sections',
    standalone: true,
    templateUrl: './sections.component.html',
    imports: [
      NgFor,
      NgIf,
      ContactSectionComponent,
      GridSectionComponent,
      ImageSectionComponent,
      MainCenteredSectionComponent,
      MainImageSectionComponent,
      MainSocialAndContactSectionComponent,
      OfferSectionComponent,
      TextSectionComponent,
    ]
})
export class SectionsComponent {
  @Input()
  sections: Section[] = [];

  readonly defaultClasses = "container mx-auto px-1 sm:px-4 md:px-6 lg:px-8";
}
