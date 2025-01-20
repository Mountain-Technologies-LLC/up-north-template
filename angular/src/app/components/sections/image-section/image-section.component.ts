import { Component, Inject, Input } from '@angular/core';
import { ImageSection } from '../../../../schema';
import { APP_BASE_HREF, NgClass,  NgFor,  NgIf } from '@angular/common';

@Component({
  selector: 'app-image-section',
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './image-section.component.html',
})
export class ImageSectionComponent {
  constructor (@Inject(APP_BASE_HREF) public baseHref: string) { }

  @Input()
  imageSection!: ImageSection;
}
