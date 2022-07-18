import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {
ParentCName:string="";
  constructor() { }

  ngOnInit(): void {
    console.log("Client : It is Parent ");
  }

  onParentUpdate(EventObj:any)
  {
    console.log("Parent - Updating Value ", EventObj);
    this.ParentCName = EventObj.clientname;
  }
}
