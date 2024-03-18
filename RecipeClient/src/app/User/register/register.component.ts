import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from '../user.modle';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  userExists = false;
  registrationFailed = false;
userName1!:string
  constructor(private router: Router,private fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required]
    }, { validator: this.checkPasswords });
    
    const currentUserString = sessionStorage.getItem('currentUser');
    if (currentUserString !== null) {
      const currentUser = JSON.parse(currentUserString);
      this.userName1=currentUser.username
      }
  }
  checkPasswords(group: FormGroup) { 
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
  
    return pass === confirmPass ? null : { passwordMismatch: true }     
  }
  formSubmitted = false;
  onSubmit() {
    this.formSubmitted = true;
    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const address = this.registerForm.get('address')?.value;
    const id =0;
    const user: User = {
      id,
      name,
      address,
      email,
      password,
    };
    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    this._userService.register(user).subscribe(
      (user) => {
        // הצלחה! ניתוב לדף המתכונים
       console.log("Succeed!!!!!!!!!!");
       this.registrationFailed=false;
       this.userExists=false,
      //  Swal.fire({
      //   icon: 'success',
      //   title: 'ברוך הבא נרשמת בהצלחה! ',
      //   confirmButtonColor: 'rgb(179, 56, 82)'
      // });
    
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
      this.router.navigate(['/recipe/all-recipe']);

      },
      (error) => {
        if (error.status === 404) {
          this.registrationFailed = true;
        } else if (error.status === 400) {
          this.userExists = true;
          Swal.fire({
            icon: 'error',
            title: 'שגיאה',
            text: '!המשתמש כבר קיים',
            confirmButtonColor: 'rgb(179, 56, 82)'
          });
        }else {
          // טיפול בשגיאות אחרות
          console.error('Unexpected error:', error);
        }
      }
    );
  }
}
