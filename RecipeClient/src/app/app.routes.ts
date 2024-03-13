import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
    { path: 'user', loadChildren: () => import('./User/user.module').then(c => c.UserModule) },
    { path: 'recipe', loadChildren: () => import('./Recipe/recipe.module').then(c => c.RecipeModule) },
    { path: '**', component: NotFoundComponent }
];

