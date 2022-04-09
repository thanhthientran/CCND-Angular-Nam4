import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.servive';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a test',
  //   'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg'),
  //   new Recipe('B Test Recipe', 'This is simply b test',
  //   'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg'),
  // ];

  recipes!: Recipe[];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  // ngOnInit(): void {
  //   this.recipes = this.recipeService.getRecipes();
  // }

  ngOnInit(): void {
    // this.recipeWasSelected.emit(recipe)
    this.recipes = this.recipeService.getRecipes();
  }

}
