import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
        'Makaron', 
        'italiano', 
        'https://www.allrecipes.com/thmb/X7YTvuaWALmH382xmOpfBQ_68mo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg',
        [new Ingredient("Makaron", 1), new Ingredient("Sos pomidorowy", 1)]),
        new Recipe('Domowe Sushi', 'Duzo ryzu i octu', 'https://houseofasia.pl/wp-content/uploads/2022/12/jak_zrobic_sushi_w_domu_house_of_asia.jpg',
        [new Ingredient("Ryż", 1), new Ingredient("Ocet", 1)]),
        new Recipe('Pierogi', 'Z miesem', 'https://kuchnia-marty.pl/wp-content/uploads/2014/09/pierogi2.jpg',[new Ingredient("Pierogi", 1), new Ingredient("Sól", 1)]),

        
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

}