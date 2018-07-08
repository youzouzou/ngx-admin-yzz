import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'fixed'})
export class NumberPipe implements PipeTransform {
  transform(value:number, exponent:number):number {
    exponent = parseInt(exponent) >= 0 ? parseInt(exponent) : 0;
    return parseFloat(value).toFixed(exponent);
  }
}
