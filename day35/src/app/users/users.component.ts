import { Component, OnInit } from '@angular/core';
import * as URL from '../common/api';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("URL ", URL.serverURL, URL.loginURL, URL.userURL);
  }

}
