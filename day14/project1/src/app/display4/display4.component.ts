import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display4',
  templateUrl: './display4.component.html',
  styleUrls: ['./display4.component.css']
})
export class Display4Component implements OnInit {
colorCode:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onBlue()
  {
    this.colorCode = "blue"
  }
}
