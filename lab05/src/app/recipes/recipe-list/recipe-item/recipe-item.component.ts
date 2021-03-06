import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.servive';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {



  @Input() recipe!: Recipe;
  @Input() index!: number;
  // @Output() recipeSelected = new EventEmitter();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
