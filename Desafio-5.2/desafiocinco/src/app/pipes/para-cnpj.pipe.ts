import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paraCnpj'
})
export class ParaCnpjPipe implements PipeTransform {

  transform(value: string) {
    return value.substring(0, 2) + '.' + value.substring(2, 5) + '.' + value.substring(5,8) + '/'
    + value.substring(8,12) + '-' + value.substring(12,14);
  }

}
