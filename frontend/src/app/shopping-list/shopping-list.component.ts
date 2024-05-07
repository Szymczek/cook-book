import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingListServce: ShoppingListService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServce.getIngredients();  
    this.subscription = this.shoppingListServce.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

  }
  
}
