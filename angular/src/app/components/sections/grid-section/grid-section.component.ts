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

    this.gridColsSmCount = Math.min(this.gridSection.gridColsSection.length, 2);
    this.gridColsLgCount = Math.min(this.gridSection.gridColsSection.length, 3);
    this.gridGapY = hasText ? 10 : 0;

    this.removeListMargin = !hasText;
  }

  gridColsSmCount!: number;
  gridColsLgCount!: number;
  gridGapY!: number;

  removeListMargin!: boolean
}
