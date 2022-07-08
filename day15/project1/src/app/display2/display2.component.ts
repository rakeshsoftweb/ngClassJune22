import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';
@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor(private data2 : Data2Service) { }

  ngOnInit(): void {
    const Result = this.data2.publicFullName;
    console.log(Result);
    const Result2 = Data2Service.staticFullName;
    console.log(Result2);
    const Result3 = this.data2.GetPrivateVarVal();
    console.log(Result3);
  }

}
