import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css']
})
export class DisplayformComponent implements OnInit {
  frmClient: any;
  constructor() { }
  ngOnInit(): void {
    this.frmClient = new FormGroup(
      {
        id: new FormControl("", Validators.required),
        clientname: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
        phone: new FormControl("", Validators.required)
      }
    )
  }
  onSubmit(clientForm: any) {
    console.log(this.frmClient.status);
  }
}
