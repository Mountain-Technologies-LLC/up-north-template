import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import * as data from '../assets/data.json';
import { Data } from './data';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly data: Data = data;

  constructor (@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    const html = this.document.querySelector("html");

    if (html != null) {
      html.setAttribute("data-theme", this.data.theme);
    }
  }

  companyName: string = this.data.companyName;
  theme: string = this.data.theme;

  // Footer
  currentYear: number = new Date().getFullYear();
  tagline: string = this.data.tagline;
}
