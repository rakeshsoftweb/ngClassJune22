import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../users/data1.service';
import { LeavesbalService } from '../leaves/leavesbal.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  constructor(private data1 : Data1Service, private leavebal : LeavesbalService) { }

  ngOnInit(): void {
    const Result:string = this.data1.DisplayUsers();
    console.log(Result);
    this.leavebal.DisplayLeavesBal();
  }

}
