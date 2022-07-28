import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
frmOrder:any;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.frmOrder = this.fb.group({
        orderno:"",
        Products:this.fb.array([])
      })
  }
  get Products(): FormArray{
    return this.frmOrder.get("Products") as FormArray;
  }
  onAddProduct()
  {
    this.Products.push(this.newProduct());
  }
  newProduct():FormGroup{
    return this.fb.group({
      product:""
    })
  }
  onSubmit()
  {
    console.log(this.frmOrder.value);
  }
}
