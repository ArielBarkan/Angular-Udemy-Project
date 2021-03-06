import { Component, OnInit } from '@angular/core';
import {Recipe} from '../shared/models/recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

 receiveRecipeEmitted:Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.receiveRecipeEmitted = recipe;
        }
      );
  }
  // onReceiveRecipeEmitted(recipe: Recipe){
  //   this.receiveRecipeEmitted = recipe;
  //
  // }
}
