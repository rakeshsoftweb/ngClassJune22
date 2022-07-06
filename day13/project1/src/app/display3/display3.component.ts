import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
  fullname:string="";
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit()
  {
    console.log(this.fullname);
  }
}
