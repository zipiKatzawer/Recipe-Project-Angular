import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { UserService } from '../../User/user.service';
import { User } from '../../User/user.modle';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-small-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.css'
})
export class SmallRecipeComponent implements OnInit {
  @Input() recipe!: Recipe;
  isCurrentUserRecipe: boolean = false;
  isLiked: boolean = false;
  userName1!:string
  constructor(private router: Router, private _userService: UserService,private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this._userService.getUserById(this.recipe.userId).subscribe(
      {
        next: (res:any) => {
          console.log("res", res);
          this.userName1=res.name
          const currentUserString = sessionStorage.getItem('currentUser');
          if (currentUserString !== null) {
            const currentUser = JSON.parse(currentUserString);
            console.log('sessionStorage username:', currentUser.username, " ", res.name);
            if(currentUser.username==res.name)
            this.isCurrentUserRecipe = true;
          }
        }
      }
    );
  }
  getDifficultyIcons(difficultyLevel: number): number[] {
    return Array(difficultyLevel).fill(0);
  }
  toggleLike() {
    this.isLiked = !this.isLiked;
    setTimeout(() => {
      this.isLiked = false;
    }, 1000); 
  }
  isRecipeOwner(): boolean {
    return this.isCurrentUserRecipe;
  }

  navigateToDetails() {
    const currentUserString = sessionStorage.getItem('currentUser');
    if(currentUserString!=null){
    console.log("id", this.recipe.recipeId);
    this.router.navigate(['/recipe/recipe-details', this.recipe.recipeId]);
    }
    else
    {
      console.log("You need to do login")
      Swal.fire({
        icon: 'error',
        title: 'לא מורשה',
        text: 'עליך להרשם כדי לראות את המתכון'
      });
      this.router.navigate(['/user/login']);
    }
  }
  navigateToEdit()
  {
    if(this.isCurrentUserRecipe){
    console.log("id", this.recipe.recipeId);
    this.router.navigate(['/recipe/edit-recipe', this.recipe.recipeId]);
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'לא מורשה',
        text: 'אין הרשאה לעריכת המתכון.'
      });
    }
  }
 
}