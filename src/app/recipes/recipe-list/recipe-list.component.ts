import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: []
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeInst: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeInst.getRecipes();
  }

}
