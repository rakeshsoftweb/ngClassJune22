import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display6',
  templateUrl: './display6.component.html',
  styleUrls: ['./display6.component.css']
})
export class Display6Component implements OnInit {
counter:number=1;
  constructor() { }

  ngOnInit(): void {
  }

  onCounter()
  {
    this.counter++;
    console.log(this.counter);
  }

}
