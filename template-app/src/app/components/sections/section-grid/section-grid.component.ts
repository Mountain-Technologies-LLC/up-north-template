import { Component, Input } from '@angular/core';
import { SectionGrid } from '../../../data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-section-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './section-grid.component.html',
  styleUrl: './section-grid.component.scss'
})
export class SectionGridComponent {
  @Input()
  sectionGrid!: SectionGrid;
}
