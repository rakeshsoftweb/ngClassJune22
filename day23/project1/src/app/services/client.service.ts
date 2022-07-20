import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }
  strURL:string = "http://localhost:3000/clients";

  GetAllClient()
  {
    return this.http.get(this.strURL);
  }

  AddNewClient(client:any)
  {
    return this.http.post(this.strURL,client);
  }

}
