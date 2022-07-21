import { Component, OnInit, Input, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-complcdetails',
  templateUrl: './complcdetails.component.html',
  styleUrls: ['./complcdetails.component.css']
})
export class ComplcdetailsComponent implements OnInit,OnDestroy {
@Input('propcounter') CounterValue:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    let {CounterValue } = changes;
    console.log("Changes is called", CounterValue.previousValue, CounterValue.currentValue);
  }

  ngOnDestroy()
  {
    console.log("destroy is called")
  }

}
