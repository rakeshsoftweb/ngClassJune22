import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display9',
  templateUrl: './display9.component.html',
  styleUrls: ['./display9.component.css']
})
export class Display9Component implements OnInit {
PayType:Payment=Payment.None;
  constructor() { }

  ngOnInit(): void {
  }

  onPayment(PayNo:any)
  {
    if(PayNo === 1) {
      this.PayType = Payment.Cash;
    } else if(PayNo === 2 ) {
      this.PayType = Payment.Cheque;
    } else if(PayNo === 3) {
      this.PayType = Payment.Transfer
    } else
    {
      this.PayType = Payment.None
    }
  }
}

enum Payment {
  None = "None",
  Cash = "Cash Payment",
  Cheque = "Cheque Payment",
  Transfer = "Online Transfer"
}
