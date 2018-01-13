import {Ingredients} from '../shared/models/ingredients.model';

export class ShoppingListService {

  private ingredients:Ingredients[] = [
    new Ingredients("Apples", 4),
    new Ingredients("Tomatoes",7)
  ];

  getShoppingList(){
      return this.ingredients.slice();
  }

}
