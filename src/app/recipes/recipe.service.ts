import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes:Recipe[] = [new Recipe(
    "KookaBurra", 
    "Acha hai ye recipe",
    "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg",
    [new Ingredient("kuka",14),new Ingredient("kukka",10)]
    ),new Recipe(
      "Burra", 
      "Bura hai ye recipe",
      "https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg",
      [new Ingredient("bura",17),new Ingredient("burra",19)]
      )];

  constructor(private shoppingListService:ShoppingListService){}    

  getRecipes(){
    return this.recipes.slice(); // in order to get a new reference of recipes
  }

  getRecipe(index : number){
    return this.recipes[index];
  }

  addIngsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);    
  }
}