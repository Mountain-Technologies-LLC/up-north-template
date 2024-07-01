import { Component, Input } from '@angular/core';
import { SectionOffer } from '../../../data';

@Component({
  selector: 'app-section-offer',
  standalone: true,
  imports: [],
  templateUrl: './section-offer.component.html',
  styleUrl: './section-offer.component.scss'
})
export class SectionOfferComponent {
  @Input()
  sectionOffer!: SectionOffer;
}
