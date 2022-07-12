import { Injectable } from '@angular/core';
import { LeavesModule } from './leaves.module';
@Injectable({
  providedIn: LeavesModule
})
export class LeavesbalService {

  constructor() { }
  DisplayLeavesBal()
  {
    console.log("Leaves Balance is 10 ");
  }
}
