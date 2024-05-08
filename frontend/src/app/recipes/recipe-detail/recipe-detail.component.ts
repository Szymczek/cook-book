import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { RouterLink, ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  id: number;
  constructor(private slService: ShoppingListService,private recipeService:RecipeService, private route: ActivatedRoute, private router: Router) {}
 
  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  // onAddRecipeIngredients(){
  //   this.recipe.ingredients.forEach(ingredient => {
  //     this.slService.addIngredient(ingredient);
  //   });
  // }

  onAddRecipeIngredients(){
    this.slService.addIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.onDelete(this.id);
    this.router.navigate(['/recipes']);
  }

  
}
