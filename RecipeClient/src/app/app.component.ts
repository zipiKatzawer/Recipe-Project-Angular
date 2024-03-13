import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { AddRecipeComponent } from './Recipe/add-recipe/add-recipe.component';
import { RegisterComponent } from './User/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecipeClient';
}
