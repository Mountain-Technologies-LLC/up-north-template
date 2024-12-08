import { Component, Input } from '@angular/core';
import { ContactSection } from '../../../../schema';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  @Input()
  contactSection!: ContactSection;
}
