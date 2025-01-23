import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Schema } from '../schema';
import { APP_BASE_HREF, DOCUMENT } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styles: ":host { display: flex; flex-direction: column; position: relative; }"
})
export class AppComponent implements OnInit {
  constructor (
    @Inject(DOCUMENT) private document: Document,
    @Inject(APP_BASE_HREF) public baseHref: string,
    private readonly globalService: GlobalService) {

    this.globalService.schema.subscribe({
      next: newValue => {
        const setTheme = this.schema.themeDefault == newValue.themeDefault ? false : true;

        this.schema = newValue;

        if (setTheme) {
          this.setTheme();
        }
      }
    });

    this.globalService.editing.subscribe({
      next: newValue => {
        this.editing = newValue;
      }
    });
  }

  schema: Schema = this.globalService.schema.value;

  ngOnInit(): void {
    if (typeof window !== "undefined"
        && window.matchMedia
        && window.matchMedia('(prefers-color-scheme: dark)').matches
        && this.schema.themeDark != null) {
      this.schema.themeDefault = this.schema.themeDark;
    }
    this.setTheme();

    const faviconLink = this.document.querySelector('html head link[type="image/x-icon"]');

    if (faviconLink != null) {
      faviconLink.setAttribute("href", this.baseHref + "/images/favicon.png");
    }
  }

  companyName: string = this.schema.companyName;
  logoFileName: string = this.schema.logoFileName ?? "/images/logo.png";
  editing: boolean = this.globalService.editing.value;

  // Footer
  backgroundImage: string
    = this.schema.footerImageFileName != null
    ? "url('" + this.baseHref + "/images/" + this.schema.footerImageFileName + "')"
    : "unset";
  currentYear: number = new Date().getFullYear();
  tagline: string = this.schema.tagline;

  private setTheme() {
    const html = this.document.querySelector("html");

    if (html != null) {
      html.setAttribute("data-theme", this.schema.themeDefault);

      const metaTheme = html.querySelector("head meta[name='theme-color']");

      if (typeof window !== "undefined" && metaTheme != null) {
        const base100 = window.getComputedStyle(this.document.body).getPropertyValue('--b1');
        metaTheme.setAttribute("content", 'oklch(' + base100 + ')');
      }
    }
  }
}
