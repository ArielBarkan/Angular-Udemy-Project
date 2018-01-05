import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isBootstrapDropDownOpen = false;

  @HostListener('click') toggleBootstrapDropDown(){
     this.isBootstrapDropDownOpen = !this.isBootstrapDropDownOpen;
  }
    constructor() { }

}
