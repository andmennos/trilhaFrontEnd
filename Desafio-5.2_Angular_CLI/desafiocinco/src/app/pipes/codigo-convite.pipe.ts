import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigoConvite'
})
export class CodigoConvitePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 4) + ' - ' + value.substring(4, 12) + ' / ' +
    value.substring(12,20);
  }

}
