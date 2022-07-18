import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display1det',
  templateUrl: './display1det.component.html',
  styleUrls: ['./display1det.component.css']
})
export class Display1detComponent implements OnInit {
@Input('PropEmp') EmpData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
