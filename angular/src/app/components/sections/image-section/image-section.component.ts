import { Component, Inject, Input, OnInit } from '@angular/core';
import { ImageSection } from '../../../../schema';
import { APP_BASE_HREF, NgClass,  NgFor,  NgIf } from '@angular/common';

@Component({
  selector: 'app-image-section',
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './image-section.component.html',
})
export class ImageSectionComponent implements OnInit {
  constructor (@Inject(APP_BASE_HREF) public baseHref: string) { }

  ngOnInit(): void {
    if (this.imageSection.imageFileNames != null) {
      let length = this.imageSection.imageFileNames.length;
      this.imageListClasses.push("grid-cols-" + Math.min(length, 2));
      this.imageListClasses.push("sm:grid-cols-" + Math.min(length, 3));
      this.imageListClasses.push("md:grid-cols-" + Math.min(length, 4));
    }
  }

  @Input()
  imageSection!: ImageSection;

  imageListClasses: string[] = [];
}
