import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  user: User;
  constructor() {
    this.user = {
      id: 1,
      name: 'Lee',
      admin: 'admin'
    }
  }
}
