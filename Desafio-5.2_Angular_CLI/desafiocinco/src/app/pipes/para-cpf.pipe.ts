import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paraCpf'
})
export class ParaCpfPipe implements PipeTransform {

  transform(value: string) {
    return value.substring(0, 3) + '.' + value.substring(3, 6) + '.' + value.substring(6,9) + '-'
    + value.substring(9, 11);
  }


}
