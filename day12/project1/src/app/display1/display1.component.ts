import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  onSubmit() {
    const Result = this.Add2Num();
    console.log(Result);
  }
  Add2Num(): number {
    // return 2 + 3;
    return 12345;
  }
}
