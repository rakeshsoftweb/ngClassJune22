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
  editMode: boolean = false;
  clientMsg:string ="";
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
    const clientValue = this.frmClient.value;
    // add or update 
    if (this.editMode) {
      this.client.UpdateClient(clientValue).subscribe((res:any)=>{
        this.editMode = false;
        this.LoadClient();
        this.clientMsg = "Client Update Successfully"
      })
    } else {
      this.client.AddNewClient(clientValue).subscribe((res: any) => {
        this.LoadClient();
        this.clientMsg = "Client Added Successfully"
      })
    }

  }
  onDelete(cid: any) {
    this.client.DeleteClient(cid).subscribe((res: any) => {
      console.log("Deleted ", res);
      this.LoadClient();
      this.clientMsg = "Client Deleted Successfully"
    })
  }
  onEdit(client: any) {
    this.editMode = true;
    this.clientMsg = "Edit Mode"
    this.frmClient = this.formBuilder.group({
      id: client.id,
      clientname: client.clientname,
      address: client.address,
      city: client.city
    })
  }

  onDiscard()
  {
    this.editMode = false;
    this.clientMsg = ""
    this.frmClient = this.formBuilder.group({
      id: '',
      clientname: '',
      address: '',
      city: ''
    })
  }

}
