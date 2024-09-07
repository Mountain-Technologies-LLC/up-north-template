import { Component, input } from '@angular/core';
import { Page } from '../../../../data';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FocusRemoverDirective } from '../../../shared/focus-remover.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FocusRemoverDirective, NgFor, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  companyName = input<string>();
  pages = input<Page[]>();
}
