import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';
import { Data2Service } from '../data2.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  constructor(private data1 : Data1Service, private data2 : Data2Service) { }

  ngOnInit(): void {
    this.data1.DisplayData1Service();
    this.data2.DisplayData2Service();
  }

}
