import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
hdr1:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onHdr1Change()
  {
    this.hdr1 = !this.hdr1;
  }
}
