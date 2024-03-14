import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';


const RecipeRoutes: Routes = [
  { path: '', redirectTo: 'all-recipe', pathMatch: 'full' },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'all-recipe', component: AllRecipesComponent},
  { path: 'all-recipe/:id', component: SmallRecipeComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'edit-recipe/:id', component:  EditRecipeComponent}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(RecipeRoutes)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
