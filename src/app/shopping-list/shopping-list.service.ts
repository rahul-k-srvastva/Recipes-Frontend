import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients:Ingredient[] = [new Ingredient("Haldi",50),new Ingredient("Jeera",220)];
    
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients(){
      return this.ingredients.slice() ;
  }
}