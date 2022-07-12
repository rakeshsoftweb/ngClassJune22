import { Injectable } from '@angular/core';
import { UsersModule } from './users.module';

@Injectable({
  providedIn: UsersModule
})
export class Data1Service {

  constructor() { }

  DisplayUsers():string
  {
    return "Users Service is called";
  }

}
