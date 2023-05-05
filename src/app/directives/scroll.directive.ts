import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.nav-bar') newNavBar: boolean;

  @HostListener('window.scroll') onScroll() {
    console.log(window.scrollY);

    if(window.scrollY >= 5) {
      this.newNavBar = true;
    } else {
      this.newNavBar = false;
    }
  }

}
