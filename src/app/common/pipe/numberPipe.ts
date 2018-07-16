import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'fixed'})
export class NumberPipe implements PipeTransform {
  transform(value: number, exponent: string): string {
    return value.toFixed(parseInt(exponent) >= 0 ? parseInt(exponent) : 0);
  }
}
