import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }
  strURL:string = "http://localhost:3000/clients/";

  GetAllClient()
  {
    return this.http.get(this.strURL);
  }

  AddNewClient(client:any)
  {
    return this.http.post(this.strURL,client);
  }

  UpdateClient(client:any)
  {
    const UpdateURL = this.strURL + client.id;
    return this.http.put(UpdateURL,client);
  }

  DeleteClient(cid:any)
  {
    const DeleteURL = this.strURL + cid;
    return this.http.delete(DeleteURL);
  }

}
