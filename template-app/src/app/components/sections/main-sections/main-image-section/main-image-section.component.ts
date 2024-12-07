import { Component, Inject, Input } from '@angular/core';
import { MainImageSection } from '../../../../../schema';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-main-image-section',
  templateUrl: './main-image-section.component.html',
})
export class MainImageSectionComponent {
  constructor (@Inject(APP_BASE_HREF) public baseHref: string) { }

  @Input()
  mainImageSection!: MainImageSection;
}
