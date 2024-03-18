import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Category } from '../../Category/category.model';
import { CategoryService } from '../../Category/category.service';
@Component({
  selector: 'app-edit-recipe',

  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {
  recipe!: Recipe; // define the Recipe model appropriately
  selectedDate!: Date;
  categories: Category[] = [];
  dialogVisible = true;

  constructor(private route: ActivatedRoute,private router: Router, private recipeService: RecipeService,private _categoryService: CategoryService) { }

  // showOrHideDialog(visible: boolean) {
  //   this.dialogVisible = visible;
  // }
  ngOnInit(): void {

    const recipeId = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(recipeId).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
    this._categoryService.getCategotyList().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error("Error fetching categories:", error);
      }
    );
  }
  saveChanges(): void {
    this.dialogVisible = false;
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to save the changes?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#FF69B4',
      cancelButtonColor: '#FFFFFF',
      background: '#FFFFFF',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.recipeService.updateRecipe(this.recipe).subscribe(() => {
          Swal.fire({
            title: 'Recipe updated successfully!',
            text: 'The recipe has been updated successfully.',
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
            background: '#FFFFFF',
            iconColor: '#FF69B4'
          }).then(() => {
            this.router.navigate(['/recipe']); // Redirect to recipes list page
          });
        }, (error) => {
          // Handle errors during update
          console.error('Error updating recipe:', error);
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while saving changes.',
            icon: 'error',
            confirmButtonColor: '#FF69B4',
            background: '#FFFFFF'
          });
        });
      }
    });
  }

}
