import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display6',
  templateUrl: './display6.component.html',
  styleUrls: ['./display6.component.css']
})
export class Display6Component implements OnInit {
arrEmployees:any= [
  {empid:1,empname:'Rahul Verma', designation:'Full Stack Developer'},
  {empid:2,empname:'Amit Singh', designation:'Full Stack Developer'},
  {empid:3,empname:'Sandhya Singh', designation:'Full Stack Developer'},
  {empid:4,empname:'Akriti', designation:'Web Developer'}
]
  constructor() { }

  ngOnInit(): void {
    this.arrEmployees.forEach((item:any)=>{
      console.log(item)
    })
  }

}
