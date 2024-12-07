import { Component, Input } from '@angular/core';
import { OfferSection } from '../../../../schema';
import { OfferSectionOfferComponent } from './offer-section-offer/offer-section-offer.component';

@Component({
  selector: 'app-offer-section',
  imports: [OfferSectionOfferComponent],
  templateUrl: './offer-section.component.html',
})
export class OfferSectionComponent {
  @Input()
  offerSection!: OfferSection;
}
