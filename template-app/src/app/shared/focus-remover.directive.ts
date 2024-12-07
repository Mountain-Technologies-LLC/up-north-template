import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusRemover]',
})
export class FocusRemoverDirective {

  constructor(private elRef: ElementRef) {}

  @HostListener('click') onClick() {

    let parentElement = this.elRef.nativeElement.parentElement;

    if (parentElement.classList.contains('dropdown')) {
      parentElement.classList.toggle('dropdown-open');
    }

    while (!parentElement.classList.contains('dropdown')) {
      parentElement = parentElement.parentElement;
    }

    if (!parentElement.classList.contains('dropdown-open') && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
  }

  @HostListener('blur')
  onBlur() {
    if (document.activeElement instanceof HTMLElement) {
      let parentElement = this.elRef.nativeElement.parentElement;

      while (!parentElement.classList.contains('dropdown')) {
        parentElement = parentElement.parentElement;
      }

      parentElement.classList.remove('dropdown-open');
    }
  }
}
