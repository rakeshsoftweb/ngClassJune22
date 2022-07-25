import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-rxjsdispdetails',
  templateUrl: './rxjsdispdetails.component.html',
  styleUrls: ['./rxjsdispdetails.component.css']
})
export class RxjsdispdetailsComponent implements OnInit {
Message1:any="";
  constructor(private notifyService: NotifyService) { }

  ngOnInit(): void {
    this.notifyService.NotifyMessage.subscribe(msg=>{
      this.Message1 = msg;
    })
  }

}
