import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display9',
  templateUrl: './display9.component.html',
  styleUrls: ['./display9.component.css']
})
export class Display9Component implements OnInit {
arrUsers:any = [];
  constructor() { }

  ngOnInit(): void {
    this.arrUsers = [
      {id:1, userid:"admin1", password:"admin1234", status:"active"},
      {id:2, userid:"admin2", password:"admin1235", status:"disabled"},
      {id:3, userid:"admin3", password:"admin1236", status:"active"},
      {id:4, userid:"admin4", password:"admin1237", status:"disabled"},
      {id:5, userid:"admin5", password:"admin1238", status:"active"}
    ]
  }

}
