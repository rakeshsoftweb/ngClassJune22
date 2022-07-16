import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Myservice2Service {

  constructor() { }

  protected Srv2Message = "this is service 2 using protected variable";
}
