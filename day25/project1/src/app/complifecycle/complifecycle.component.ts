import { Component, ElementRef, OnInit, ViewChild,  AfterViewInit, AfterContentChecked, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-complifecycle',
  templateUrl: './complifecycle.component.html',
  styleUrls: ['./complifecycle.component.css']
})
export class ComplifecycleComponent implements OnInit, AfterViewInit, AfterContentChecked {
count:number=1;
@ViewChild('inputFullName') inputFullName!:ElementRef;
ChildShow:boolean=true;
  constructor() {
    console.log("Constructor is called");
   }

  ngOnInit(): void {
    console.log("ngOnInit is called");
    // this.inputFullName.nativeElement.style.color="red";
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("Change is called");
  }
  ngAfterViewInit()
  {
    this.inputFullName.nativeElement.style.color="red";
    this.inputFullName.nativeElement.value="Input box value replaced";

    console.log("ngAfterViewInit is called");
  }

  ngAfterViewChecked()
  {
    this.inputFullName.nativeElement.style.color="red";
    console.log("ngAfterViewChecked is called");
  }

  ngAfterContentInit()
  {
    console.log("ngAfterContentInit is called");
  }

  ngAfterContentChecked()
  {
    console.log("ngAfterContentChecked is called");
  }

  onClickHandler()
  {
    this.count++;
  }
  onRemoveChild(){
    this.ChildShow = !this.ChildShow;
  }
}
