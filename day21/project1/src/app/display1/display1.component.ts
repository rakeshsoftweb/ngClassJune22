import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
EmployeesData:any=[];
selectedEmpId:number=0;
  constructor() { }

  ngOnInit(): void {
    this.EmployeesData = [
      {eid:1,ename:"Nancy", designation:"Manager", basic:90000, hra:20000, ca:10000,da:15000},
      {eid:2,ename:"Anita", designation:"Web Developer", basic:40000, hra:20000, ca:10000,da:15000},
      {eid:3,ename:"Karan", designation:"Web Developer", basic:30000, hra:20000, ca:10000,da:15000},
      {eid:4,ename:"Amit", designation:"Web Developer", basic:20000, hra:20000, ca:10000,da:15000},
      {eid:5,ename:"Rahul", designation:"Full Stack Developer", basic:60000, hra:20000, ca:10000,da:15000}
    ]
  }

  onDetails(selectedId:number){
    this.selectedEmpId = selectedId;
  }
}
