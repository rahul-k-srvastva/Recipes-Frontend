import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeToShow:Recipe;
  // constructor(private shoppingListService: ShoppingListService) { }
  constructor(private recipeService: RecipeService) { }


  ngOnInit(): void {
  }

  // addIngToShoppingList(){
  //   this.recipeToShow.ingredients.forEach((ingredient)=>{
  //     this.shoppingListService.addIngredient(ingredient);
  //   })
  // }

  addIngToShoppingList(){
    this.recipeService.addIngsToShoppingList(this.recipeToShow.ingredients);
  }
}
