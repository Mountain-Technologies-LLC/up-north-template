import { Component, input } from '@angular/core';
import { Schema } from '../../../schema';
import { NgClass, NgIf } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

@Component({
  selector: 'app-header',
  imports: [EditMenuComponent, FormsModule, NgClass, NgIf, NavbarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  editing = input<boolean>();
  schema = input<Schema>();

  showEditMenu = false;
  hideEditMenu() {
    this.toggleEditMenu();
  }

  toggleEditMenu() {
    const element = document.getElementById('headerWrapper');
    const showEditMenu = !this.showEditMenu;

    setTimeout(() => {
      element?.classList.toggle('h-screen');
    }, showEditMenu ? 0 : 300);

    this.showEditMenu = showEditMenu;
  }
}
