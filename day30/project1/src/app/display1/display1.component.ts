import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
UserID:string="";
UserPassword:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onLocalStoragTest()
  {
    this.UserID = "Admin2";
    this.UserPassword ="pwd1";
    // now we are going to write in local storage
    localStorage.setItem("loginid", this.UserID);
    localStorage.setItem("password", this.UserPassword);
  }
  onLocalStorageReading(){
    const LSUserId = localStorage.getItem("loginid");
    const LSPassword = localStorage.getItem("password");
    console.log(LSUserId, LSPassword);
  }
  onLocalStorageClear()
  {
    localStorage.clear();
  }
  RemoveUserId()
  {
    localStorage.removeItem("loginid");
  }
}
