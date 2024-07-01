import { Component, Input } from '@angular/core';
import { SectionImage } from '../../../data';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-section-image',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './section-image.component.html',
  styleUrl: './section-image.component.scss'
})
export class SectionImageComponent {
  @Input()
  sectionImage!: SectionImage;
}
