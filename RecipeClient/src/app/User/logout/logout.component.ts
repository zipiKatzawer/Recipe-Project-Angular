import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  // standalone: true,
  // imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  ngOnInit(): void {
     // remove current user from session storage
     sessionStorage.removeItem('currentUser');
  }

}
