import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-displayform1',
  templateUrl: './displayform1.component.html',
  styleUrls: ['./displayform1.component.css']
})
export class Displayform1Component implements OnInit {
frmEmployee:any;
  constructor() { }

  ngOnInit(): void {
    this.frmEmployee =  new FormGroup({
      employeename: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      pincode: new FormControl("", Validators.pattern('^[0-9]+$'))
    })
  }
  onSubmit() {
    console.log("Submited", this.frmEmployee.status);
  }
}
