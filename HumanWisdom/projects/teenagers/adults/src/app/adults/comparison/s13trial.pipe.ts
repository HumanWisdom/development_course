import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 's13trial'
})
export class S13trialPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
