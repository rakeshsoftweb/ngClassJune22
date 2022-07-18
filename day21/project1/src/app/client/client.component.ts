import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
@Output() EventClient = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddClient()
  {
    console.log("Client : It is Child ");
    const clientData = {clientname:'ABC 123'};
    this.EventClient.emit(clientData);
  }

}
