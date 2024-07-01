import { Component, Input } from '@angular/core';
import { SectionHeroWithFacebookAndContact } from '../../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-hero-with-facebook-and-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section-hero-with-facebook-and-contact.component.html',
  styleUrl: './section-hero-with-facebook-and-contact.component.scss'
})
export class SectionHeroWithFacebookAndContactComponent {
  @Input()
  sectionHeroWithFacebookAndContact!: SectionHeroWithFacebookAndContact;
}
