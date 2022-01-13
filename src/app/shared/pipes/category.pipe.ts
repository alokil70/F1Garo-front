import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category'
})
export class CategoryPipe implements PipeTransform {
    transform(value: any, searchText: number): any {
        console.log(value);
        if (searchText === 3) return value;
        return value.filter((i: { category: { id: number } }) => i.category.id === searchText);
    }
}
