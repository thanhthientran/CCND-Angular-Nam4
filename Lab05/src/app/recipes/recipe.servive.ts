import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg'),
    new Recipe('B Test Recipe', 'This is simply b test',
      'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
