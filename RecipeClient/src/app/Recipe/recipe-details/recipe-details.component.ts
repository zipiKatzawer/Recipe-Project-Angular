import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { UserService } from '../../User/user.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../../Category/category.service';
import { Category } from '../../Category/category.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;
  isCurrentUserRecipe: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private _recipeService: RecipeService,private _userService: UserService,private _categoryService: CategoryService) { }

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
    // this._categoryService.getCategotyList().subscribe()=>{


    }
 
 deleteRecipe() {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
     
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
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }
}