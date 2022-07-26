import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  constructor(private ele : ElementRef) { 
    ele.nativeElement.style.color="red";
  }

}
