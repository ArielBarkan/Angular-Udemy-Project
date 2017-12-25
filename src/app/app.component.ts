import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() currentPage: string = 'recipes';

  headerNavigateTo(page:string){
    this.currentPage = page;
    // recipes
    // shopping-list
  }


}
