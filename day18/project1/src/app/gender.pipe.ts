import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(item: unknown, ...args: unknown[]): unknown {
    // console.log("Pipe Method ", item, args)
    if (item === 'M') {
      return 'Male';
    } else if (item === 'F') {
      return 'Female'
    } else {
      return "Not a valid Gender code !!"
    }

  }

}
