import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display5',
  templateUrl: './display5.component.html',
  styleUrls: ['./display5.component.css']
})
export class Display5Component implements OnInit {
arrNums:any = [10,20,30,40];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(numValue:any)
  {
    console.log("Submit DOM Element", numValue);
    console.log("Submit Input box value ", numValue.value);
    this.arrNums.push(numValue.value)
  }
}
