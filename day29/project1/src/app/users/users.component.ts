import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
Users:any=[];
geo:any;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.GetAllUsers().subscribe((data:any)=>{
      this.Users = data;
      // console.log(this.Users);
      // console.log(this.Users[0].id);
      // console.log(this.Users[0].address);
      const geo = this.Users[0].address.geo;
      console.log(geo);
      console.log(geo.lng);
      this.geo = geo;
    })
  }

}
