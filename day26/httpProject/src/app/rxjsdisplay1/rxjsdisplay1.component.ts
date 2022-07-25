import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';
@Component({
  selector: 'app-rxjsdisplay1',
  templateUrl: './rxjsdisplay1.component.html',
  styleUrls: ['./rxjsdisplay1.component.css']
})
export class Rxjsdisplay1Component implements OnInit {

  constructor(private notifyService: NotifyService) { }

  ngOnInit(): void {
  }
  onSend() {
    this.notifyService.NotifyMessage.next("I am on rxjs display form");
  }
}
