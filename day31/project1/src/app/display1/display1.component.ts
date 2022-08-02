import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  ArrData = {contactname:"AbC Company", address:"plot 123"};
  constructor() { }

  ngOnInit(): void {
  }

  LocalStorageSet() {
    // console.log(typeof(this.ArrData));
    // console.log(this.ArrData.length);
    const strData = JSON.stringify(this.ArrData);
    localStorage.setItem("Nums", strData);
  }

  LocalStorageGet() {
    const Result = localStorage.getItem("Nums");
    console.log(Result);       
    console.log(typeof(Result));   
  }

}
