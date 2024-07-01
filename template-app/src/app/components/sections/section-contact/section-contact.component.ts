import { Component, Input } from '@angular/core';
import { SectionContact } from '../../../data';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.scss'
})
export class SectionContactComponent {
  @Input()
  sectionContact!: SectionContact;
}
