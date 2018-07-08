import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'length'})
export class LengthPipe implements PipeTransform {
  transform(value:string, exponent:number):string {
    return value.slice(0, exponent);
  }
}
