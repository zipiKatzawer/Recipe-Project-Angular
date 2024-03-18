import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

import { DurationPipe } from './duration.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogModule } from 'primeng/dialog';

// import {
//   MatDialog,
//   MatDialogRef,
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogTitle,
//   MatDialogContent,
// } from '@angular/material/dialog';
@NgModule({
  declarations: [AddRecipeComponent,AllRecipesComponent,SmallRecipeComponent,RecipeDetailsComponent,EditRecipeComponent,DurationPipe],
  imports: [
    ReactiveFormsModule,CommonModule,FormsModule,RecipeRoutingModule,
    MatCardModule, MatButtonModule,MatIconModule,MatFormFieldModule, MatSelectModule, MatInputModule,
    // MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,
DialogModule
    
    
  ]
})
export class RecipeModule { }
