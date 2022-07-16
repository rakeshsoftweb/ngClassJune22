import { Injectable } from '@angular/core';
import { Myservice2Service } from './myservice2.service';
@Injectable({
  providedIn: 'root'
})
export class Myservice1Service extends Myservice2Service {

  constructor() {
    super();
   }
  DisplayService1()
  {
    console.log("Service 1 is called");
    console.log("Service 1 : protected ", this.Srv2Message);
  }
}
