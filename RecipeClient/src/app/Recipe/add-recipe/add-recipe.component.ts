import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Category } from '../../Category/category.model';
import { CategoryService } from '../../Category/category.service';

@Component({
  selector: 'app-add-recipe',
  // standalone: true,
  // imports: [ReactiveFormsModule,CommonModule,FormsModule ],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css',
  
  
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  // selectedCategory: number = 0;
  // selectedDifficultyLevel: number = 0;
  // successMessage: string | undefined;
  categories: Category[] = [];
  ingredientsFormArray!: FormArray;
  instructionsFormArray!: FormArray;
  constructor(private router:Router,private fb: FormBuilder, private _recipeService: RecipeService,private _categoryService: CategoryService) { }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      recipeName: ['', Validators.required],
      preparationTime: ['', Validators.required],
      category: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([])
    });
    this.ingredientsFormArray = this.recipeForm.get('ingredients') as FormArray;
    this.instructionsFormArray = this.recipeForm.get('instructions') as FormArray;

    this._categoryService.getCategotyList().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error("Error fetching categories:", error);
      }
    );
  }

  addIngredient() {
    this.ingredientsFormArray.push(this.fb.group({ ingredient: '' }));
  }

  removeIngredient(index: number) {
    this.ingredientsFormArray.removeAt(index);
  }

  addInstruction() {
    this.instructionsFormArray.push(this.fb.group({ instruction: '' }));
  }

  removeInstruction(index: number) {
    this.instructionsFormArray.removeAt(index);
  }

  onSubmit() {
    // Extracting form values
    const { recipeName, category, preparationTime, difficultyLevel, ingredients, instructions } = this.recipeForm.value;

    const date = new Date();
    const formattedDate = date.toISOString();
    const ingredients1: string[] = this.ingredientsFormArray.value.map((ingredient: { ingredient: string }) => ingredient.ingredient);
    const instructions1: string[] = this.instructionsFormArray.value.map((instruction: { instruction: string }) => instruction.instruction);

    const recipe: Recipe = {
      recipeId: 0,
      name: recipeName,
      categoryId: category,
      time: preparationTime,
      level: difficultyLevel,
      addRecipe: formattedDate,
      ingredients: ingredients1,
      preparation: instructions1,
      userId: 1,
      imageRoute: "string"
    };

    this._recipeService.addRecipe(recipe).subscribe(
      (recipe) => {
        // this.successMessage = "המתכון נוסף בהצלחה!";
        this.resetForm();
        this.clearFormArrays();
        // Show Sweet Alert
        Swal.fire({
          title: '!המתכון נוסף בהצלחה',
          icon: 'success',
          confirmButtonText: 'אישור'
        })
        .then((result) => {
          // Navigate to all recipes page
          if (result.isConfirmed) {
            this.router.navigate(['/recipe/all-recipe']);
          }
        });
      },
      (error) => {
        console.error("Error adding recipe:", error);
        // this.successMessage = "שגיאה בהוספת מתכון. אנא נסה שנית.";
        Swal.fire({
          title: 'שגיאה',
          text: 'שגיאה בהוספת מתכון. אנא נסה שנית.',
          icon: 'error',
          confirmButtonText: 'אישור'
        });
        this.clearFormArrays();
      }
    );
  }

  resetForm() {
    this.recipeForm.reset();
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get instructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }
  clearFormArrays() {
    // Clear the FormArray for ingredients
    while (this.ingredientsFormArray.length !== 0) {
      this.ingredientsFormArray.removeAt(0);
    }
  
    // Clear the FormArray for instructions
    while (this.instructionsFormArray.length !== 0) {
      this.instructionsFormArray.removeAt(0);
    }
  }
}