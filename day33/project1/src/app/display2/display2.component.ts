import { Component, OnInit } from '@angular/core';
import { of, mergeMap, interval, map } from 'rxjs';


@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor() { }
  words:any = of("One", "Two","Three");

  ngOnInit(): void {

    const Result  = this.words.pipe(mergeMap((val:any)=>interval(3000).pipe(map(i=> val + i))))
    Result.subscribe((val:any)=>console.log(val));    

  }
}
