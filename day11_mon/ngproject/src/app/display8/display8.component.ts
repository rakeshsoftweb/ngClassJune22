import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display8',
  templateUrl: './display8.component.html',
  styleUrls: ['./display8.component.css']
})
export class Display8Component implements OnInit {
PayType:Payment = Payment.Transfer;
  constructor() { }

  ngOnInit(): void {
    console.log(this.PayType);
    this.PayType = Payment.Cheque;
    console.log(this.PayType);
  }
}

enum Payment {
  Cash = "Cash Payment",
  Cheque = "Cheque Payment",
  Transfer = "Online Transfer"
}

