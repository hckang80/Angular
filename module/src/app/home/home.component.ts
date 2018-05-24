import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header [title]="title"></app-header>
    <ul>
      <li>id : {{ userService.user.id }}</li>
      <li>name : {{ userService.user.name }}</li>
      <li>admin : {{ userService.user.admin }}</li>
    </ul>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  title = "User Information";
  constructor(public userService: UserService) { }

  ngOnInit() {
    
  }

}
