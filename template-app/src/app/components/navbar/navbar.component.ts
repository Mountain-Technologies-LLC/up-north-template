import { Component } from '@angular/core';
import { Data, Page } from '../../data';
import * as data from '../../../assets/data.json';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private readonly data: Data = data;

  companyName: string = this.data.companyName;
  pages: Page[] = this.data.pages;
}
