import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'coachSearch'})
export class CoachSearchPipe implements PipeTransform {
transform(items: any[], searchText: string) {
    if (!items) return [];
    if (!searchText) return items;
  
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item['FName']).toLowerCase().includes(searchText.toLowerCase()) || String(item['LName']).toLowerCase().includes(searchText.toLowerCase());
      });
    });
}
}