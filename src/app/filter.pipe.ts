import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, field:string, searchText: string): any {
    if (!items) return [];
    if(!searchText || searchText==="") return items;
    searchText = searchText;
    return items.filter(it => {
      return it['Nombre'].includes(searchText);
    });
  }

}
