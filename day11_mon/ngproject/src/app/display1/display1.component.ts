import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  // Explict Type
  TitleText: string = "Angular Learning";
  Amount: number = 12345;
  Status: boolean = true;

  // Implicit Type
  TitleText1: any = "Angular Learning1";
  TitleText2 = "Angular Learning2";
  Amount1: any = "Rs.1234555";
  Status1: any = true;
  constructor() { }

  ngOnInit(): void {
  }


}
