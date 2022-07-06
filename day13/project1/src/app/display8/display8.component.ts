import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display8',
  templateUrl: './display8.component.html',
  styleUrls: ['./display8.component.css']
})
export class Display8Component implements OnInit {
contactcreated:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onContactCreated()
  {
    this.contactcreated = !this.contactcreated;
  }

}
