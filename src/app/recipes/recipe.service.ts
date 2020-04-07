import {EventEmitter} from '@angular/core';
import {Recipe} from '../shared/models/recipe.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Schnitzel","A schnitzel is meat", "https://cdn.jsdelivr.net/gh/ArielBarkan/Recipe-list@master/src/assets/images/recipes/1.jpg"),
    new Recipe("Fried egg","A fried egg is a cooked dish", "https://cdn.jsdelivr.net/gh/ArielBarkan/Recipe-list@master/src/assets/images/recipes/2.jpg"),
    new Recipe("Mejadra ","Mejadra consists of cooked lentils together with groats", "https://cdn.jsdelivr.net/gh/ArielBarkan/Recipe-list@master/src/assets/images/recipes/3.jpg")
  ];



  constructor() { }


  getRecipes(){
      return this.recipes.slice();
  }

  emittSelectedRecipe(){
    this.recipeSelected.emit()
  }

}
