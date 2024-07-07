import { Component, Input } from '@angular/core';
import { SectionHeroWithSocialAndContact } from '../../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-hero-with-social-and-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section-hero-with-social-and-contact.component.html',
  styleUrl: './section-hero-with-social-and-contact.component.scss'
})
export class SectionHeroWithSocialAndContactComponent {
  @Input()
  sectionHeroWithSocialAndContact!: SectionHeroWithSocialAndContact;
}
