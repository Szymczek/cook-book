import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
