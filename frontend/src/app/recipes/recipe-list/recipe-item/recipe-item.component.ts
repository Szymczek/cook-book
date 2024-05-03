import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../recipe.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit(): void {
  }


}
