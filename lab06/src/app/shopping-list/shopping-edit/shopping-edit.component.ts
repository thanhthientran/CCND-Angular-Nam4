import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  // @ViewChild('nameInput')
  // nameInput!: ElementRef;
  // @ViewChild('amountInput')
  // amountInput!: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  // @Output() onClear = new EventEmitter<void>();
  ingredient!: Ingredient;
  editMode: boolean = false;
  editedItemIndex!: number;
  editItem !: Ingredient;

  @ViewChild('f') slForm!: NgForm;

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnInit(): void {
    this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    })
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    this.ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, this.ingredient)
    }
    else {
      this.shoppingListService.addIngredient(this.ingredient);
    }
    console.log(this.ingredient);
    this.onClear();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}

