import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Makaron', 'italiano', 'https://www.allrecipes.com/thmb/X7YTvuaWALmH382xmOpfBQ_68mo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg'),
    new Recipe('Domowe Sushi', 'Duzo ryzu i octu', 'https://houseofasia.pl/wp-content/uploads/2022/12/jak_zrobic_sushi_w_domu_house_of_asia.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    console.log("RecipeWasSelected!: " + recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
