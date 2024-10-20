import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Schema } from '../schema';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { APP_BASE_HREF, DOCUMENT, NgIf } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, NgIf, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
  templateUrl: './app.component.html',
  styles: ":host { display: flex; flex-direction: column; }"
})
export class AppComponent implements OnInit {
  constructor (
    @Inject(DOCUMENT) private document: Document,
    @Inject(APP_BASE_HREF) public baseHref: string,
    private readonly globalService: GlobalService) {

    this.globalService.schema.subscribe({
      next: newValue => {
        const setTheme = this.schema.theme == newValue.theme ? false : true;

        this.schema = newValue;

        if (setTheme) {
          this.setTheme();
        }
      }
    });
  }

  schema: Schema = this.globalService.schema.value;

  ngOnInit(): void {
    this.setTheme();

    const faviconLink = this.document.querySelector('html head link[type="image/x-icon"]');

    if (faviconLink != null) {
      faviconLink.setAttribute("href", this.baseHref + "/images/favicon.png");
    }
  }

  companyName: string = this.schema.companyName;
  editing: boolean = this.globalService.editing.value;
  theme: string = this.schema.theme;

  // Footer
  backgroundImage: string
    = this.schema.footerImageFileName != null
    ? "url('" + this.baseHref + "/images/" + this.schema.footerImageFileName + "')"
    : "unset";
  currentYear: number = new Date().getFullYear();
  tagline: string = this.schema.tagline;

  private setTheme() {
    this.theme = this.schema.theme;

    const html = this.document.querySelector("html");

    if (html != null) {
      html.setAttribute("data-theme", this.schema.theme);

      const metaTheme = html.querySelector("head meta[name='theme-color']");

      if (typeof window !== "undefined" && metaTheme != null) {
        const base100 = window.getComputedStyle(this.document.body).getPropertyValue('--b1');
        metaTheme.setAttribute("content", 'oklch(' + base100 + ')');
      }
    }
  }
}
