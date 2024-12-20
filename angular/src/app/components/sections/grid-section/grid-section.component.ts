import { Component, Input } from '@angular/core';
import { GridSection } from '../../../../schema';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-grid-section',
  imports: [NgFor],
  templateUrl: './grid-section.component.html',
})
export class GridSectionComponent {
  @Input()
  gridSection!: GridSection;
}
