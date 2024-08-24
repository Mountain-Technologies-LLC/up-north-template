import { Component, Input } from '@angular/core';
import { GridSection } from '../../../../data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-grid-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './grid-section.component.html',
})
export class GridSectionComponent {
  @Input()
  gridSection!: GridSection;
}
