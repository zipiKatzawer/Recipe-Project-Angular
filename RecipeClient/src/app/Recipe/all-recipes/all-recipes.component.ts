import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  // standalone: true,
  // imports: [],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit{
  recipes: Recipe[] = [];
  constructor(private _recipeService: RecipeService){}
  
  ngOnInit() {
    this.getRecipes();
    // const currentUserString = sessionStorage.getItem('currentUser');
    //     if (currentUserString !== null) {
    //       const currentUser = JSON.parse(currentUserString);
    //       console.log('sessionStorage username:', currentUser.username);
    //     } else {
    //       console.log('No user data in sessionStorage');
    //     }
  }

  getRecipes() {
    this._recipeService.getRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        console.log('Recipes:', this.recipes); // הדפסת הנתונים לצורך בדיקה בקונסול
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }
}