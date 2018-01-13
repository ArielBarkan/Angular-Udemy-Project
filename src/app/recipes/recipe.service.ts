import {EventEmitter} from '@angular/core';
import {Recipe} from '../shared/models/recipe.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Schnitzel","A schnitzel is meat", "../assets/images/recipes/1.jpg"),
    new Recipe("Fried egg","A fried egg is a cooked dish", "../assets/images/recipes/2.jpg"),
    new Recipe("Mejadra ","Mejadra consists of cooked lentils together with groats", "../assets/images/recipes/3.jpg")
  ];



  constructor() { }


  getRecipes(){
      return this.recipes.slice();
  }

  emittSelectedRecipe(){
    this.recipeSelected.emit()
  }

}