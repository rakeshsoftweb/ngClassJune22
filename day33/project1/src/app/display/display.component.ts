import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs'
import { map, filter } from 'rxjs/operators'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const data = from(["red", "green", "blue"]);
    // const AllColors = data.pipe(map(item => "ColorName " + item ));
    // AllColors.subscribe(val => console.log("Subscribe", val));

    // const Nums = from([10, 20, 30]);
    // const AllNums = Nums.pipe(map(item => item * 2));
    // AllNums.subscribe(val => console.log("Subscribe Value", val));

    const Nums = from([10, 20, 30, 40, 50]);
    const AllNums = Nums.pipe(filter(item => item>30));
    AllNums.subscribe(val => console.log("Subscribe Value", val));

  }

}
