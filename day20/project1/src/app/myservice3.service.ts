import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class Myservice3Service {

  constructor() { }

  DisplayService3()
  {
    console.log("Display Service 3");
  }
}
