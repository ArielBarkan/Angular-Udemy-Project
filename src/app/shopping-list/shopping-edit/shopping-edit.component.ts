import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Ingredients} from '../../shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('name') selectedName;
@ViewChild('amount') selectedAmount;
@Output() emittNewIngredient = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit() {
  }


  addIngredient(){
    const newName: string = this.selectedName.nativeElement.value;
    const newAmount: number = this.selectedAmount.nativeElement.value;
    const newIngredient = new Ingredients(newName, newAmount)
    this.emittNewIngredient.emit(newIngredient);
  }

}
