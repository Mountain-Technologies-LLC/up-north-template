import { Component, ElementRef, HostListener, input, Renderer2 } from '@angular/core';
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

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (event.target instanceof Document
      && event.target.scrollingElement instanceof Element
      && event.target.scrollingElement.scrollTop > 0)
    {
      this.renderer.addClass(this.el.nativeElement, 'shadow-md');
      this.renderer.addClass(this.el.nativeElement, 'shadow-neutral/5');
    }
    else
    {
      this.renderer.removeClass(this.el.nativeElement, 'shadow-md');
      this.renderer.removeClass(this.el.nativeElement, 'shadow-neutral/5');
    }
  }

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
