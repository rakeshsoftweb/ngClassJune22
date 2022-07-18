import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {
EmployeesData:any =[];
  constructor() { }

  ngOnInit(): void {
  }

  onEmployeeUpdate(Employee:any)
  {
    this.EmployeesData.push(Employee);
  }
}
