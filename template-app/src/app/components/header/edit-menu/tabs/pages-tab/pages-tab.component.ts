import { Component, input } from '@angular/core';
import { Schema } from '../../../../../../schema';

@Component({
  selector: 'app-pages-tab',
  standalone: true,
  imports: [],
  templateUrl: './pages-tab.component.html',
  styleUrl: './pages-tab.component.scss'
})
export class PagesTabComponent {
  schema = input<Schema>();

}
