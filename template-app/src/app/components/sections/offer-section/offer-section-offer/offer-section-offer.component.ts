import { Component, Input } from '@angular/core';
import { OfferSectionOffer } from '../../../../../schema';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer-section-offer',
  imports: [NgClass, NgFor, NgIf, RouterLink],
  templateUrl: './offer-section-offer.component.html',
})
export class OfferSectionOfferComponent {
  @Input()
  offer!: OfferSectionOffer;

  @Input()
  isFirst?: boolean | null;

  @Input()
  isLast?: boolean | null;
}
