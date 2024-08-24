import { Component, Inject, Input } from '@angular/core';
import { MainImageSection } from '../../../../data';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-main-image-section',
  standalone: true,
  imports: [],
  templateUrl: './main-image-section.component.html',
})
export class MainImageSectionComponent {
  constructor (@Inject(APP_BASE_HREF) public baseHref: string) { }

  @Input()
  mainImageSection!: MainImageSection;
}