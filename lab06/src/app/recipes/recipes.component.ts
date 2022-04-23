import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.servive';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  selectedRecipe!: Recipe;
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    })
  }

}
