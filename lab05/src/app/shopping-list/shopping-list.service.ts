import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

  ingredientChanged = new EventEmitter();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Pineapples', 10),
  ];

  getIngredient(){
    //Cach 1:
    // return this.ingredients;
    //cach 2:
    return this.ingredients.slice();
  }

  onAddIngredient = new EventEmitter();
  //add new Ingredient to list
  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice())
  }
}
