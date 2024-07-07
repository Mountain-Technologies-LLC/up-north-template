import { Component, Input } from '@angular/core';
import { Section } from '../../data';
import { NgFor, NgIf } from '@angular/common';
import { SectionHeroWithSocialAndContactComponent } from "./section-hero-with-social-and-contact/section-hero-with-social-and-contact.component";
import { SectionHeroCenteredComponent } from "./section-hero-centered/section-hero-centered.component";
import { SectionContactComponent } from "./section-contact/section-contact.component";
import { SectionImageComponent } from "./section-image/section-image.component";
import { SectionGridComponent } from "./section-grid/section-grid.component";
import { SectionTextComponent } from "./section-text/section-text.component";
import { OfferSectionComponent } from "./offer-section/offer-section.component";

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
      SectionHeroWithSocialAndContactComponent,
      SectionImageComponent,
      OfferSectionComponent,
      SectionTextComponent,
    ]
})
export class SectionsComponent {
  @Input()
  sections: Section[] = [];
}
