import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length < 5) {
      return value;
    }
    return 'XXX-XX-' + value.substr(0, value.length - 5);
  }

}