import { Component, Input } from '@angular/core';
import { ContactSection } from '../../../data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  @Input()
  contactSection!: ContactSection;
}
