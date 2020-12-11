import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipeToShow:Recipe;
  id:number;

  constructor(private recipeService: RecipeService , private route: ActivatedRoute , private router:Router) { }


  ngOnInit(): void {
 
    
    this.route.params.subscribe((params : Params)=>{
      this.id = +params['id'];
      this.recipeToShow = this.recipeService.getRecipe(this.id);
    })
  }

  addIngToShoppingList(){
    this.recipeService.addIngsToShoppingList(this.recipeToShow.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(["edit"], { relativeTo:this.route });
    // this.router.navigate(["../",this.id,'edit'], { relativeTo:this.route });
  }
}
