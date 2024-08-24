import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import * as data from '../assets/data.json';
import { Data } from './data';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_BASE_HREF, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly data: Data = data;

  constructor (@Inject(DOCUMENT) private document: Document,
    @Inject(APP_BASE_HREF) public baseHref: string) { }

  ngOnInit(): void {
    const html = this.document.querySelector("html");
    const faviconLink = this.document.querySelector('html head link[type="image/x-icon"]');

    if (html != null) {
      html.setAttribute("data-theme", this.data.theme);
    }

    if (faviconLink != null) {
      faviconLink.setAttribute("href", this.baseHref + "/images/favicon.png");
    }
  }

  companyName: string = this.data.companyName;
  footerBackgroundImage: string
    = this.data.footerImageFileName != null
    ? "url('" + this.baseHref + "/images/" + this.data.footerImageFileName + "')"
    : "unset";
  theme: string = this.data.theme;

  // Footer
  currentYear: number = new Date().getFullYear();
  tagline: string = this.data.tagline;
}
