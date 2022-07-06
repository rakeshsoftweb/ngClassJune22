import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-display5-det',
  templateUrl: './display5-det.component.html',
  styleUrls: ['./display5-det.component.css']
})
export class Display5DetComponent implements OnInit {
  @Input('propFirstName') FirstName:any;
  @Input('propLastName') LastName:any;
  constructor() { }

  ngOnInit(): void {
  }

}
