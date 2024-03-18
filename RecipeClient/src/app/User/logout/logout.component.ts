import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  // standalone: true,
  // imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
     // remove current user from session storage
     sessionStorage.removeItem('currentUser');
     Swal.fire({
      icon: "info",
      title: "See You Later....",
      showConfirmButton: false,
      timer: 1500

    });
    this.router.navigate(['/home']);
  }

}
