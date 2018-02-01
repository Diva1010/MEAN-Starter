import { Component, OnInit } from '@angular/core';
import { userservice } from '../services/userservice';
import { user } from '../model/usermodel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: user;
  constructor(public userservice: userservice) { }

  ngOnInit() {
    this.user = this.userservice.userdata;
  }

}
