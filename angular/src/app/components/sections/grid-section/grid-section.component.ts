import { Component, Input, OnInit } from '@angular/core';
import { GridSection } from '../../../../schema';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-grid-section',
  imports: [NgIf, NgFor],
  templateUrl: './grid-section.component.html',
})
export class GridSectionComponent implements OnInit {
  @Input()
  gridSection!: GridSection;

  ngOnInit() {
    const hasText = this.gridSection.gridColsSection.some(x => x.text != null || x.subText != null);

    let length = this.gridSection.gridColsSection.length;
    this.gridClasses.push("sm:grid-cols-" + Math.min(length, 2));
    this.gridClasses.push("md:grid-cols-" + Math.min(length, 3));
    this.gridClasses.push("gap-y-" + (hasText ? 10 : 0));

    this.removeListMargin = !hasText;
  }

  gridClasses: string[] = [];

  removeListMargin!: boolean
}
