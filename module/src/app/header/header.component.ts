import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <span>{{ title }}</span>
      <a class="user" href="#">{{ userService.user.name }}</a>
    </nav>
  `,
  styles: [`
    nav {
      height: 50px;
      background-color: #4a4c88;
    }
    nav > span, nav > a {
      line-height: 50px;
      margin: 0 30px;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .user {
      float: right;
      font-style: italic;
    }
  `]
})
export class HeaderComponent implements OnInit {
  @Input() title;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
