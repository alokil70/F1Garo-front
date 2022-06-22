import { OrdersService } from './../modules/cash/orders/services/orders.service';
import { IProduct, IProductItem } from './../models/product.model';
import { InitialState } from './../state/initial-state/initial.state';
import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngxs/store';

@Pipe({
    name: 'products'
})
export class ProductsPipe implements PipeTransform {
    constructor(private store: Store) {}
    transform(value: number, args: string): string {
        let proditem: IProductItem;
        let result = '';
        this.store.select(InitialState.getProds).subscribe(v =>
            v.find(item => {
                if (item.id === value) {
                    proditem = item;
                    if (args in item) {
                        console.log('true', item);
                    }
                    result = proditem.name;
                }
            })
        );
        return result;
    }
}
