import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const data = from(["red", "green", "blue"]);
    const Result = data.pipe(map(item => item));
    Result.subscribe(val => console.log("Subscribe", val));

    const Nums = from([1, 2, 3, 4, 5]);
    const Result = Nums.pipe(filter(num => num % 2 === 0));
    Result.subscribe(val => console.log(`Even number: ${val}`));
  }
}
