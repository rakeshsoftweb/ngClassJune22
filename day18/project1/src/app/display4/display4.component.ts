import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display4',
  templateUrl: './display4.component.html',
  styleUrls: ['./display4.component.css']
})
export class Display4Component implements OnInit {
  arrEmployee:any =[
    {empid:1, empname:'Rajesh', gender:'M'},
    {empid:2, empname:'Priya', gender:'F'},
    {empid:3, empname:'Shristi', gender:'F'},
    {empid:4, empname:'Manoj', gender:'M'},
    {empid:5, empname:'Supriya', gender:'F'},
    {empid:6, empname:'Aman', gender:'M'},
    {empid:6, empname:'Rajan Singh', gender:'M'},
    {empid:6, empname:'Raj Kumar Singh', gender:'M'},
  ]
  textSearch:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
