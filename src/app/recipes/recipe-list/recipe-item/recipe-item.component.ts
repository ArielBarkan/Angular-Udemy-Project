import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() emitterItemSelected =new EventEmitter<void>();
  @Input() singleRecipe :Recipe
  constructor() { }

  ngOnInit() {
  }

  itemSelected(){
    this.emitterItemSelected.emit();
  }

}
