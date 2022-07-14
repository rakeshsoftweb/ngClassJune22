import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit  {
@Input('propCounter') CounterValue:any;
  constructor() {
    console.log("Display 2 constructor");
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log("Display 2 ngOnChanges", changes);
    const { CounterValue } = changes;
    console.log(CounterValue.currentValue, CounterValue.previousValue);
  }

  ngOnInit(): void {
    console.log("Display 2 ngOnInit");
  }
   ngOnDestroy()
   {
    console.log("Display 2 ngOnDestroy");
   }  

}
