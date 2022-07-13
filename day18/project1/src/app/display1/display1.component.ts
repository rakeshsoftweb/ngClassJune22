import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
TextDemo:string="This is my Angular text demo";
ProductPrice:number = 15400;
TodayDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
