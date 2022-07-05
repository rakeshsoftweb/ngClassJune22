import { Component, OnInit } from '@angular/core';

interface IEmployee {
  empname:string,
  designation:string,
  salary:number,
  active:boolean,
  company:string
}
@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.Display();
  }
  Display()
  {
    let arrEmp:IEmployee = {empname:'Rahul Sharma',designation:'fulstack developer',salary:1234555,active:true,company:''};
    // let arrEmp = {employeename:'Rahul Sharma',designation:'fulstack developer',salary:1234555,active:true};
    console.log(arrEmp);
    arrEmp.company = "ABC1 Pvt Ltd";
    console.log(arrEmp);
  }

}
