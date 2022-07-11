import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';
import { Data2Service } from '../Data2Service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const data1 = new Data1Service();
    const Result  = data1.Add2Nums(10,20);
    console.log(Result);

    const subData = data1.Subs2Nums(50,10);
    console.log(subData);

    const data2 = new Data2Service();
    const Result2  = data2.Add2Nums(30,40);
    console.log(Result2);


  }

}
