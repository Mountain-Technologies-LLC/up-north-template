import { Component, Input } from '@angular/core';
import { OfferSectionOffer } from '../../../../data';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-offer-section-offer',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './offer-section-offer.component.html',
  styleUrl: './offer-section-offer.component.scss'
})
export class OfferSectionOfferComponent {
  @Input()
  offer!: OfferSectionOffer;

  @Input()
  isFirst?: boolean | null;

  @Input()
  isLast?: boolean | null;
}