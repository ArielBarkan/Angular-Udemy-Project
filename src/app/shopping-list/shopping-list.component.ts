import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[] = [
      new Ingredients("Apples", 4),
      new Ingredients("Tomatoes",7)
  ];
  constructor() {

  }

  ngOnInit() {
  }


  onEmittNewIngredient(event: Ingredients){
    this.ingredients.push(event);
  }
}
