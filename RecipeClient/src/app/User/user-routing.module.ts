import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';


const UserRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component:LogoutComponent },
  { path: 'register', component: RegisterComponent},
  
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(UserRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
