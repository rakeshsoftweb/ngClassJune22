import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empfilter'
})
export class EmpfilterPipe implements PipeTransform {

  transform(value: any[], args:string): any {
  return value.filter(item=>{
      return item.empname.match(args)
      // return item.empname === args;
    })    
  }

}
