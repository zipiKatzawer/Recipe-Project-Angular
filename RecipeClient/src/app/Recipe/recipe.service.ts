import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModule } from '../User/user.module';
import { User } from '../User/user.modle';
import { Recipe } from './recipe.model';
import { Category } from '../Category/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _http: HttpClient) { }

  addRecipe(recipe: Recipe) {
    console.log("recipe", recipe);
    return this._http.post('https://localhost:7130/api/Recipe/AddRecipe', recipe);
  }
  getRecipes()
  {
    return this._http.get<Recipe[]>('https://localhost:7130/api/Recipe/AllRecipes');
  }
  getRecipeById(id: number): Observable<Recipe> {
    return this._http.get<Recipe>('https://localhost:7130/api/Recipe/' + id);
  }

  deleteRecipe(id: number): Observable<any> {
    return this._http.delete('https://localhost:7130/api/Recipe/' + id);
  }
  updateRecipe(recipe: Recipe) {
    
    return this._http.put('https://localhost:7130/api/Recipe/' + recipe.recipeId,recipe);
  }
}
