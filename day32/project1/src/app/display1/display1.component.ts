import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  frmClient:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmClient = this.fb.group({
      "clientid":"",
      "clientname":"",
      "address":""
    })
  }
  onSubmit()
  {
    // console.log(this.frmClient.value);
    // this.frmClient.setValue({"clientid":"999",
    // "clientname":"PQR",
    // "address":"Pune"})
    // console.log(this.frmClient.value);
    // this.frmClient.setValue({"clientid":"888"})
    // console.log(this.frmClient.value);
    this.frmClient.patchValue({"address":"Noida"})
    console.log(this.frmClient.value);
  }
  
}
