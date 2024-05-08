import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { RecipeService } from './recipes/services/recipe.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    FooterComponent,
    CommonModule,
    DropdownDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ShoppingListService, RecipeService],
})
export class AppComponent {
  loadedFeature: string = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
