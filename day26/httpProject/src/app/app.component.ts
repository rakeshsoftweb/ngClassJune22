import { Component, OnInit } from '@angular/core';
import { NotifyService } from './notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Message1:string="";
  constructor(private notifyService: NotifyService) {}
  ngOnInit(): void {
      this.notifyService.NotifyMessage.subscribe(msg=>{
        this.Message1 = msg;
      })
  }
}
