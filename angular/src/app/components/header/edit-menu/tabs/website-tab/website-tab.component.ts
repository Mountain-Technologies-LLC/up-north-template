import { Component, input } from '@angular/core';
import { Schema } from '../../../../../../schema';
import { GlobalService } from '../../../../../services/global.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-website-tab',
  imports: [NgFor],
  templateUrl: './website-tab.component.html',
})
export class WebsiteTabComponent {
  schema = input<Schema>();

  constructor (private readonly globalService: GlobalService) { }

  themes: string[] = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset",
  ];

  changedCompanyName(event: Event) {
    const newValue: Schema = {
      ...this.globalService.schema.value,
      companyName: (event.target as HTMLInputElement).value,
    };

    this.globalService.schema.next(newValue);
  }

  changedThemeDefault(theme: string) {
    const newValue: Schema = {
      ...this.globalService.schema.value,
      themeDefault: theme,
    };

    this.globalService.schema.next(newValue);
  }
}
