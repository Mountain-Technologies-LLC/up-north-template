import { Component, Input } from '@angular/core';
import { Section } from '../../data';
import { NgFor, NgIf } from '@angular/common';
import { SectionHeroWithFacebookAndContactComponent } from "./section-hero-with-facebook-and-contact/section-hero-with-facebook-and-contact.component";
import { SectionHeroCenteredComponent } from "./section-hero-centered/section-hero-centered.component";
import { SectionContactComponent } from "./section-contact/section-contact.component";
import { SectionImageComponent } from "./section-image/section-image.component";
import { SectionGridComponent } from "./section-grid/section-grid.component";
import { SectionTextComponent } from "./section-text/section-text.component";
import { SectionOfferComponent } from "./section-offer/section-offer.component";

@Component({
    selector: 'app-sections',
    standalone: true,
    templateUrl: './sections.component.html',
    styleUrl: './sections.component.scss',
    imports: [
      NgFor,
      NgIf,
      SectionContactComponent,
      SectionGridComponent,
      SectionHeroCenteredComponent,
      SectionHeroWithFacebookAndContactComponent,
      SectionImageComponent,
      SectionOfferComponent,
      SectionTextComponent,
    ]
})
export class SectionsComponent {
  @Input()
  sections: Section[] = [];
}
