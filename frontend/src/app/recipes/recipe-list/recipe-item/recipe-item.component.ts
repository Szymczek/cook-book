import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
  }

  onSelectRecipe(){
      this.recipeService.recipeSelected.emit(this.recipe);
  }

}
