import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.data.TestObservable();
  }

}
