import { Component } from '@angular/core';
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
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'test desc', 'https://www.allrecipes.com/thmb/X7YTvuaWALmH382xmOpfBQ_68mo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg'),
    new Recipe('Test recipe 2', 'test desc 2', 'https://www.allrecipes.com/thmb/X7YTvuaWALmH382xmOpfBQ_68mo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg')
  ];

}
