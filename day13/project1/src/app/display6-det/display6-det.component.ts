import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display6-det',
  templateUrl: './display6-det.component.html',
  styleUrls: ['./display6-det.component.css']
})
export class Display6DetComponent implements OnInit {
@Input('propCounter') CounterValue:any;
  constructor() { }

  ngOnInit(): void {
  }

}
