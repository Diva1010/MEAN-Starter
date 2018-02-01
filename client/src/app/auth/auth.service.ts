import { Injectable } from '@angular/core';
import { userservice } from '../services/userservice';

@Injectable()
export class AuthService {

  constructor(public userservice: userservice) { }

  get isLoggedIn() {
    if(this.userservice.userdata && this.userservice.userdata.username)
        return true;
    else
        return false;
  }

}