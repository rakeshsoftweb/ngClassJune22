import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
arrEmployee:any =[
  {empid:1, empname:'Rajesh', gender:'M'},
  {empid:2, empname:'Priya', gender:'F'},
  {empid:3, empname:'Shristi', gender:'F'},
  {empid:4, empname:'Manoj', gender:'M'},
  {empid:5, empname:'Supriya', gender:'F'},
  {empid:6, empname:'Aman', gender:'M'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
