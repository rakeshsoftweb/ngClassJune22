import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Display2();
  }

  Display2(){
    console.log("Display 2");
    // const arrEmployee = {empname:'John Andrew', age:28, phone:123455566};
    // console.log(arrEmployee);
    const arrEmployee:EmployeeModel = {"empname":"Anuj Kumar","age":22,"phone":1234444};
    console.log(arrEmployee);
  }

}

// employee model is set of entity (elements);
// element is defined as a property ex. empname and data type string 
class EmployeeModel{
  "empname":string;
  "age":number;
  "phone":number;
}
