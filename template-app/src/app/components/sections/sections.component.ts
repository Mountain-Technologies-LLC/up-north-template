import { Component, input } from '@angular/core';
import { Section } from '../../../data';
import { NgFor, NgIf } from '@angular/common';
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { GridSectionComponent } from "./grid-section/grid-section.component";
import { ImageSectionComponent } from "./image-section/image-section.component";
import { MainCenteredSectionComponent } from "./main-sections/main-centered-section/main-centered-section.component";
import { MainImageSectionComponent } from './main-sections/main-image-section/main-image-section.component';
import { MainSocialAndContactSectionComponent } from "./main-sections/main-social-and-contact-section/main-social-and-contact-section.component";
import { OfferSectionComponent } from "./offer-section/offer-section.component";
import { TextSectionComponent } from "./text-section/text-section.component";
import { MainSocialAndContactEditComponent } from "./main-sections/main-social-and-contact-section/main-social-and-contact-edit/main-social-and-contact-edit.component";
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'app-sections',
    standalone: true,
    templateUrl: './sections.component.html',
    imports: [
      ContactSectionComponent,
      GridSectionComponent,
      ImageSectionComponent,
      NgFor,
      NgIf,
      MainCenteredSectionComponent,
      MainImageSectionComponent,
      MainSocialAndContactEditComponent,
      MainSocialAndContactSectionComponent,
      OfferSectionComponent,
      TextSectionComponent,
    ]
})
export class SectionsComponent {
  sections = input<Section[]>();

  constructor(public globalService: GlobalService) {}

  editing: boolean = this.globalService.editing.value;

  readonly defaultClasses = "container mx-auto px-1 sm:px-4 md:px-6 lg:px-8";
}
