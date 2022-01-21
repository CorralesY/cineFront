import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length <2) return value; {
      const result = [];
      for (const card of value) {
        if (card.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          result.push(card);
          console.log("SI")
        };
      };
      return result;
    }
  }
}
