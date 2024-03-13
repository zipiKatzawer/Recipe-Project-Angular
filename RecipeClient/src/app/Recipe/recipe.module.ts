import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
// import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DurationPipe } from './duration.pipe';



@NgModule({
  declarations: [AddRecipeComponent,AllRecipesComponent,SmallRecipeComponent,RecipeDetailsComponent,EditRecipeComponent,DurationPipe],
  imports: [
    ReactiveFormsModule,CommonModule,FormsModule,RecipeRoutingModule,
    MatCardModule, MatButtonModule,MatIconModule
    
  ]
})
export class RecipeModule { }
