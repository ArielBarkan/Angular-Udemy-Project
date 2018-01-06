import {Component, EventEmitter, Output} from '@angular/core';
@Component({
    selector:   'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

  @Output() newpage = new EventEmitter<string>();

  href(page:string){
    this.newpage.emit(page);
  }

}
