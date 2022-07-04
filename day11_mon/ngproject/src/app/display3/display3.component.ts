import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
ShowMe:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle()
  {
    // this.ShowMe = false;
    // if(this.ShowMe === true)
    // {
    //   this.ShowMe = false;
    // } else {
    //   this.ShowMe = true;
    // }
    this.ShowMe = !this.ShowMe;

  }

}
