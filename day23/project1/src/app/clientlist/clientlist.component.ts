import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {
  clientData: any = [];
  frmClient: any;
  constructor(private client: ClientService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.LoadClient();
    this.frmClient = this.formBuilder.group({
      id: '',
      clientname: '',
      address: '',
      city: ''
    })
  }
  LoadClient() {
    this.client.GetAllClient().subscribe(data => {
      this.clientData = data;
    })   
  }
  onSubmit() {
    console.log("form ", this.frmClient.value);
    const clientValue = this.frmClient.value;
    this.client.AddNewClient(clientValue).subscribe((res: any) => {
      this.LoadClient();
    })
  }

}
