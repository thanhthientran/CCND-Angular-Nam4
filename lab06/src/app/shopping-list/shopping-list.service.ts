import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientChanged = new EventEmitter();
  startedEditing = new EventEmitter();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Pineapples', 10),
  ];

  getIngredient(index: number) {
    //Cach 1:
    return this.ingredients[index];
    //cach 2:
    // return this.ingredients.slice();
  }
  getIngredients() {
    return this.ingredients;
  }

  onAddIngredient = new EventEmitter();
  //add new Ingredient to list
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice())
  }
  updateIngredient(index: number, newIngredient:
    Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.emit(this.ingredients.slice());
     }
}
