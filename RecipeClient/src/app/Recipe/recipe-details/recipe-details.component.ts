import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { UserService } from '../../User/user.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;
  isCurrentUserRecipe: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private _recipeService: RecipeService,private _userService: UserService) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.params['id'];
    this._recipeService.getRecipeById(recipeId).subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
        this._userService.getUserById(recipe.userId).subscribe(
          (user) => {
            const currentUserString = sessionStorage.getItem('currentUser');
            if (currentUserString !== null) {
              const currentUser = JSON.parse(currentUserString);
              if (currentUser.username === user.name) {
                this.isCurrentUserRecipe = true;
              }
            }
          }
        );
      },
      (error) => {
        console.error('Failed to fetch recipe:', error);
      }
    );
  }
 deleteRecipe() {
    // Implement your delete recipe logic here
    this._recipeService.deleteRecipe(this.recipe.recipeId).subscribe(
      () => {
        // הצגת הודעה למשתמש על הצלחת המחיקה
        console.log('Recipe deleted successfully.');
        // ניתוב לדף אחר, לדוגמה חזרה לדף הראשי של המתכונים
        this.router.navigate(['/recipe']);
      },
      (error: Error) => {
        // במקרה של כשל במחיקת המתכון, ניתן להציג הודעת שגיאה למשתמש
        console.error('Failed to delete recipe:', error);
      }
    );
  }
}