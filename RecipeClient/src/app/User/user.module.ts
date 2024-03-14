import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [LoginComponent,RegisterComponent,LogoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  
    UserRoutingModule,
    RouterModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,MatSnackBarModule
    
    // FormsModule, // Add FormsModule to imports
  ],
  // exports: [LoginComponent]
})
export class UserModule { 
  
}
