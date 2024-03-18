import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { CategoryService } from '../../Category/category.service';
import { Category } from '../../Category/category.model';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit{
  public recipesListFilter: Recipe[] = [];
  public categoryList: Category[] = [];
  public filterForm!: FormGroup;
  recipes: Recipe[] = [];
  constructor(private _recipeService: RecipeService,private router:Router, private _CategoryService: CategoryService){}
  
  ngOnInit() {
    this.filterForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      duration: new FormControl(''),
    });
    this.subscribeToFormChanges();
    this.getRecipes();
    this._CategoryService.getCategotyList().subscribe({
      next: (res) => {
        this.categoryList = res;
      },
      error: (err) => { console.error(err); }
    });
  }
 

  getRecipes() {
    this._recipeService.getRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.filter();
        console.log('Recipes:', this.recipes); // הדפסת הנתונים לצורך בדיקה בקונסול
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }
  private subscribeToFormChanges() {   
    this.filterForm.valueChanges.subscribe(() => {
      this.filter();
    });
}
  filter() {
    this.recipesListFilter = this.recipes.filter(recipe =>
      (this.filterForm.controls['name'].value === '' || recipe.name.toLowerCase().includes(this.filterForm.controls['name'].value.toLowerCase())) &&
      (this.filterForm.controls['category'].value === '' || recipe.categoryId == this.filterForm.controls['category'].value) &&
      (this.filterForm.controls['duration'].value === '' || recipe.time <= this.filterForm.controls['duration'].value|| !this.filterForm.controls['duration'].value)
    );
  }
}