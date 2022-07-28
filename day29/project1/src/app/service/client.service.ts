import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http :  HttpClient) { }

  GetAllClient()
  {
    return this.http.get("http://localhost:3000/clients");
  }
  GetClientById(id:any)
  {
    return this.http.get("http://localhost:3000/clients/"+id);
  }
}
