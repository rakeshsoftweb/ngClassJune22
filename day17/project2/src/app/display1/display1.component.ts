import { Component, OnInit } from '@angular/core';
// import { Data1Service, Data2Service } from '../data1.service';
import { myNameSpace } from '../data1.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  // constructor(private data1 : Data1Service, private data2 : Data2Service) { }

  ngOnInit(): void {
    // this.data1.DisplayData1();
    // this.data2.DisplayData2();
    const data1 = new myNameSpace.Data1Service();
    data1.DisplayData1();
    const data2 =  new myNameSpace.Data2Service();
    data2.DisplayData2();
    const data3 = new myNameSpace.Data3Service();
    data3.DisplayData3();
  }

}
