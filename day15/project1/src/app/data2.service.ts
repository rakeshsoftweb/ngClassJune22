import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }

  private privateFullName ="this is private modifier value - Rahul";
  public publicFullName = "This is public modifier value - Nidhi";
  static staticFullName ="this is static modifier value -1234";

  GetPrivateVarVal():string 
  {
    return this.privateFullName;
  }  
}
