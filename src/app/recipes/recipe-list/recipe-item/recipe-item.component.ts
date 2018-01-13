import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../shared/models/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  @Input() singleRecipe :Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  itemSelected(){
    this.recipeService.recipeSelected.emit(this.singleRecipe);
  }

}
