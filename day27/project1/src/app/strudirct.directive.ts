import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStrudirct]'
})
export class StrudirctDirective {

  constructor(private temp : TemplateRef<any>, private vcref:ViewContainerRef) {

   }
   @Input() set appStrudirct(para:any)
   {
    if(para ===1 || para ===2)
    {
      // console.log("123");
      this.vcref.createEmbeddedView(this.temp);
    } else {
      this.vcref.clear();
    }
   }
}
