import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
SalaryAllow:any;
  constructor() { }

  ngOnInit(): void {
    this.SalaryAllow = of(10,20,30);
    this.SalaryAllow.pipe(map(data=>data));

    this.SalaryAllow.subscribe((item:any)=>{
        console.log("Subscribe", item)
    })
  }

}
