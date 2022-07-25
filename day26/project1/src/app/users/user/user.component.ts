import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
ChildPara:string="";
paraStatus:string="";
pwd:string="";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // routing parameters
    this.activatedRoute.params.subscribe((para:Params)=>{
      this.ChildPara = para['uid'];
      this.paraStatus =para['status'];
    })
    // query params
    this.activatedRoute.queryParams.subscribe((qParams:Params)=>{
      console.log(qParams);
      this.pwd =  qParams['password'];
    })

  }
}
