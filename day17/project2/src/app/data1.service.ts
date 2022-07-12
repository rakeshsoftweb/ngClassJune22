import { Injectable } from '@angular/core';

export namespace myNameSpace
{
  @Injectable({
    providedIn: 'root'
  })
  export class Data1Service {
    constructor() { }
    DisplayData1(){
      console.log("Display Data1")
    }
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class Data2Service {
    constructor() { }
    DisplayData2(){
      console.log("Display Data2")
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class Data3Service {
    constructor() { }
    DisplayData3(){
      console.log("Display Data3")
    }
  }

}
