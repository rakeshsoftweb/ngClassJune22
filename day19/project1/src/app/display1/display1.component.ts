import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
count:number=0;
childShow:boolean=true;
  constructor() { 
    console.log("Display1 constructor");
  }
  ngOnInit(): void {
    console.log("Display1 ngOnInit");
  }
  onCounterHandler(){
    this.count = this.count + 1;
  }
  onDestroyHandler()
  {
    this.childShow =! this.childShow;
  }
}
