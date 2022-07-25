import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }
  public NotifyMessage = new BehaviorSubject<any>("Default Notify Message");
}
