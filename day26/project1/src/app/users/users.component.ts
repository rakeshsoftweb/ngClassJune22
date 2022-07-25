import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
UsersData:any=[
  {userid:'Admin1',password:'pwd1', status:'active'},
  {userid:'Admin2',password:'pwd2', status:'disabled'},
  {userid:'Admin3',password:'pwd3', status:'active'},
  {userid:'Admin4',password:'pwd4', status:'disabled'},
  {userid:'Admin5',password:'pwd5', status:'active'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
