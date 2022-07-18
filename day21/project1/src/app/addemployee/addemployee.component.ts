import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
@Output() EventEmpUpdate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmEmployee:any)
  {
    // console.log("Employee ", frmEmployee.value);
    // console.log("Employee ", frmEmployee.status);
    this.EventEmpUpdate.emit(frmEmployee.value);
  }

}
