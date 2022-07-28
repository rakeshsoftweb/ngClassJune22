import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../service/client.service';
@Component({
  selector: 'app-clientdet',
  templateUrl: './clientdet.component.html',
  styleUrls: ['./clientdet.component.css']
})
export class ClientdetComponent implements OnInit {
cid:any;
clientData:any;
address:string="";
city:string="";
  constructor(private actRoute: ActivatedRoute, private clientService : ClientService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((prm:Params)=>{
      this.cid = prm['id'];

    //   this.clientService.GetAllClient().subscribe((data:any)=>{
    //     this.clientData = data.filter((item:any)=>{
    //       return item.id == this.cid;
    //     })        
    //     console.log("child comp data and id", this.clientData, this.cid);
    //     this.address = this.clientData[0].address;
    //     this.city = this.clientData[0].city;
    //   })
    // })

    this.clientService.GetClientById(this.cid).subscribe((data:any)=>{
      this.address = data.address;
      this.city = data.city;
    })   
  })
}

}
