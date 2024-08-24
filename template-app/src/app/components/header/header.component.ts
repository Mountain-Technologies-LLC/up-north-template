import { Component, input, model } from '@angular/core';
import { Data } from '../../../data';
import { NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NavbarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  editing = input<boolean>();
  data = model<Data>();

  themes: string[] = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset",
  ];

  changedCompanyName(event: Event) {
    this.data.update((data) => {
      if (!data) return;

      return { ...data, companyName: (event.target as HTMLInputElement).value };
    });
  }

  changedTheme(theme: string) {
    this.data.update((data) => {
      if (!data) return;

      return { ...data, theme: theme };
    });
  }

  exportJson() {
    let data = JSON.stringify(this.data());

    console.log(data);

    let file = new Blob([data], {type: 'application/json'})
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
