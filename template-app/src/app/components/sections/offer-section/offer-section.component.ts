import { Component, Input } from '@angular/core';
import { OfferSection } from '../../../../data';
import { NgClass } from '@angular/common';
import { OfferSectionOfferComponent } from './offer-section-offer/offer-section-offer.component';

@Component({
  selector: 'app-offer-section',
  standalone: true,
  imports: [NgClass, OfferSectionOfferComponent],
  templateUrl: './offer-section.component.html',
})
export class OfferSectionComponent {
  @Input()
  offerSection!: OfferSection;
}
