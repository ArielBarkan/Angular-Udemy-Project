import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() receiveRecipeEmitted:Recipe;
  constructor() { }

  ngOnInit() {
  }
  // onReceiveRecipeEmitted(recipe: Recipe){
  //   this.receiveRecipeEmitted = recipe;
  //
  // }
}
