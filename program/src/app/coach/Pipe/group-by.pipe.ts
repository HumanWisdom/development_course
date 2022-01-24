import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'groupByDate'})
export class GroupByPipe implements PipeTransform {
transform(collection: Array<any>, property: string = 'Date'): Array<any> {
    if(!collection) {
        return null;
    }
    const gc = collection.reduce((previous, current)=> {
        if(!previous[current[property]]) {
            previous[current[property]] = [];
        }
            [current].forEach(x => previous[current[property]].push(x));
        return previous;
    }, {});
    return Object.keys(gc).map(date => ({ date: date, events: gc[date] })).sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
    }  
}