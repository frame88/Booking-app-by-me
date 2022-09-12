import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intToArray'
})
export class IntToArrayPipe implements PipeTransform {
  transform(value: number): number[] {
    return new Array(value)
  }

}
