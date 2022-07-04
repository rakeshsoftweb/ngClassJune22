import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display7',
  templateUrl: './display7.component.html',
  styleUrls: ['./display7.component.css']
})
export class Display7Component implements OnInit {
// Tuple
Emp:[string, number]=["Raj", 22];
  constructor() { }

  ngOnInit(): void {
     console.log("Emp ", this.Emp);
     this.Emp = ["Rahul Sharma", 24];
     console.log("Emp ", this.Emp);
     console.log("Emp Name", this.Emp[0]);
     console.log("Emp Age", this.Emp[1]);
  }

}
