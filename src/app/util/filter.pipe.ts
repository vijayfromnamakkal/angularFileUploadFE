import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: any): any[] {

    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }

    return items.filter(singleItem =>
      singleItem["Issue count"].includes(value.id)
    );
  }
}
