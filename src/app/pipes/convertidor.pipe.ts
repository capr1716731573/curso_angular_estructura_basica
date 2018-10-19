import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertidor'
})
export class ConvertidorPipe implements PipeTransform {

  transform(value: number): any {
    return value * (1024) + ' MB';
  }

}
