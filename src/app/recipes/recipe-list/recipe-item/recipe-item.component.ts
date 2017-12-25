import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() singleRecipe :Recipe
  constructor() { }

  ngOnInit() {
  }

  itemSelected(event:MouseEvent){
    console.log(event);
  }

}
