import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  @Output() emittedRecipe = new EventEmitter<Recipe>()
  recipes: Recipe[];

  onEmitterItemSelected(recipe: Recipe){
    this.emittedRecipe.emit(recipe);
  }
  constructor(private recipeInst: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeInst.getRecipes();
  }

}
