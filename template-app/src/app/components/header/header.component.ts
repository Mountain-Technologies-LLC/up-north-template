import { Component, input } from '@angular/core';
import { Schema } from '../../../schema';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { FocusRemoverDirective } from '../../shared/focus-remover.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FocusRemoverDirective, FormsModule, NgClass, NgFor, NgIf, NavbarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  editing = input<boolean>();
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

  changedTheme(theme: string) {
    const newValue: Schema = {
      ...this.globalService.schema.value,
      theme: theme,
    };

    this.globalService.schema.next(newValue);
  }

  showEditMenu = false;
  toggleEditMenu() {
    this.showEditMenu = !this.showEditMenu;
  }

  exportJson() {
    let schema = JSON.stringify(this.schema());

    console.log(schema);

    let file = new Blob([schema], {type: 'application/json'})
    let element = document.createElement('a');
    let url = URL.createObjectURL(file);
    element.setAttribute('href', url);
    element.setAttribute('download', "data.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
