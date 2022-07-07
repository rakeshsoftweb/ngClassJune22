import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display6',
  templateUrl: './display6.component.html',
  styleUrls: ['./display6.component.css']
})
export class Display6Component implements OnInit {
  arrOrdersData = [
    {sno:1, orderdate:'01-Jul-2022',product:'Laptop',qty:1, status:'delivered'},
    {sno:2, orderdate:'02-Jul-2022',product:'Keyboard',qty:5, status:'pending'},
    {sno:3, orderdate:'03-Jul-2022',product:'USB Hard Drive',qty:3, status:'delivered'},
    {sno:4, orderdate:'05-Jul-2022',product:'Mouse',qty:5, status:'rejected'},
    {sno:5, orderdate:'06-Jul-2022',product:'Mobile ',qty:2, status:'delivered'},
    {sno:6, orderdate:'07-Jul-2022',product:'Keyboard',qty:7, status:'delivered'},
    {sno:7, orderdate:'08-Jul-2022',product:'Laptop',qty:2, status:'rejected'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
