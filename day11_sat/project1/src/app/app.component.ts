import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagehdr = 'My Website';
  amount = 10000;
  Employee = {empid:123, empname:'Raj Sharma', address:'H.no.1234'}
}
