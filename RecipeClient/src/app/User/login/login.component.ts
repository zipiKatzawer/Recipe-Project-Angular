import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { User } from '../user.modle';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public addForm!: FormGroup;
  hide: boolean = true; 
  users: User[] = [];
  id!:number
  constructor(private router: Router, private _userService: UserService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      "username": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required, Validators.minLength(6)])
    });
    
  }

  login() {
    const username = this.addForm.get('username')?.value;
    const password = this.addForm.get('password')?.value;
    
    const userLogin = {
      username: username,
      password: password
    };

    console.log(userLogin);
    this._userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users=users
        this.users.forEach((user: User) => {
          if (user.name === userLogin.username) {
           this.id=user.id  
            console.log('User found with matching name and username:', user.id);
          }
        });
      }
    )
    sessionStorage.setItem('currentUser', JSON.stringify(userLogin));
    this._userService.login(userLogin).subscribe(
      (userLogin1) => {
       console.log("Succeed!!!!!!!!!!");
        // Save user details in sessionStorage
        sessionStorage.setItem('currentUserId',`${this.id}`)
        const currentUserString = sessionStorage.getItem('currentUser');
        if (currentUserString !== null) {
          const currentUser = JSON.parse(currentUserString);
          console.log('sessionStorage username:', currentUser.username);
          console.log('sessionStorage userId:', sessionStorage.getItem('currentUserId'));
        } else {
          console.log('No user data in sessionStorage');
        }      
         Swal.fire({
        icon: 'success',
        title: 'User Exists!',
        text: 'User was found in the system.'
      });
      this.router.navigate(['/recipe/all-recipe']);
      },
      (error) => {
        if (error.status === 404) {
          console.log("משתמש לא קיים", error.status );
          this.router.navigate(['/user/register']);
        } else if (error.status === 400) {
          console.log("סיסמא שגויה", error.status );
          Swal.fire({
            icon: 'error',
            title: ' Not correct password!',
            text: 'User does not exist in the system.'
          });
        }else{
          console.log('Error occurred while fetching users:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while fetching users.'
          });
        }
      }
    );

  }
}