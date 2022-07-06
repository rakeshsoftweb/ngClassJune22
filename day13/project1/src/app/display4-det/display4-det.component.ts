import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display4-det',
  templateUrl: './display4-det.component.html',
  styleUrls: ['./display4-det.component.css']
})
export class Display4DetComponent implements OnInit {
@Input("propfullname") displayFullName:any;
  constructor() { }

  ngOnInit(): void {
  }

}
