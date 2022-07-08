import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css'],
  // providers:[DataService]
})
export class Display1Component implements OnInit {
  Result:string="";
  Result4Add2Num:number=0;
  constructor(private data : DataService) { }

  ngOnInit(): void {
    // const Result = this.data.ShowNotification("Display is called");
    // console.log("Display 1 Component : ", Result);
  }

  onClickHandler()
  {
    this.Result = this.data.ShowNotification("Display is called");
  }
  onAdd2Nums()
  {
    this.Result4Add2Num = this.data.Add2Nums(10,20);
  }
}
