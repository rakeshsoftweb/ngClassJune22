import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  ShowNotification(MessageText:any)
  {
    // console.log(MessageText);
    return MessageText;    
  }
  Add2Nums(val1:number, val2: number):number
  {
    return val1 + val2;
  }

}
