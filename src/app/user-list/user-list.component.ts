import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-list/UserService/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => { 
        this.users = data; 
      },
      error: (error) => {
        console.error('Error fetching users', error);
      },
      complete: () => {
        console.log('Completed fetching users');
      }
    });
  }
}
