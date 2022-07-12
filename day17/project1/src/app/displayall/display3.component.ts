import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  template:'<h1>This is Display3 Component</h1> <p>this is para </p>',
  styles:['h1 {color:red}']
})
export class Display3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
