import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) {}

  // onAddRecipeIngredients(){
  //   this.recipe.ingredients.forEach(ingredient => {
  //     this.slService.addIngredient(ingredient);
  //   });
  // }

  onAddRecipeIngredients(){
    this.slService.addIngredients(this.recipe.ingredients);
  }

  
}
