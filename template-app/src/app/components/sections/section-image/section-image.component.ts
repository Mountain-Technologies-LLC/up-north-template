import { Component, Inject, Input } from '@angular/core';
import { SectionImage } from '../../../data';
import { APP_BASE_HREF, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-section-image',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './section-image.component.html',
  styleUrl: './section-image.component.scss'
})
export class SectionImageComponent {
  constructor (@Inject(APP_BASE_HREF) public baseHref: string) { }

  @Input()
  sectionImage!: SectionImage;
}
