import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
        id: new FormControl(""),
        clientname: new FormControl(""),
        address: new FormControl(""),
        phone: new FormControl("")
      }
    )
  }
  onSubmit(clientForm: any) {
    console.log(clientForm);
  }
}
