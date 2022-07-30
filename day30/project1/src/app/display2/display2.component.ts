import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
Product:string="Dell Laptop";
  constructor() { }

  ngOnInit(): void {
  }
  onSetValueSS()
  {
    sessionStorage.setItem("productkey", this.Product);
  }
  onGetValueSS()
  {
    const ProductKey = sessionStorage.getItem("productkey");
    console.log(ProductKey);
  }
}
