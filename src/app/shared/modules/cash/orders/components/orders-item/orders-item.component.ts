import { ICartItem } from './../../../../../models/cart.model';
import { IOrderItem } from './../../../../../models/order.model';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/shared/types/products.interface';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { InitialStateResponseInterface } from 'src/app/shared/state/initial-state/initial-state-response.interface';
import { InitialState } from 'src/app/shared/state/initial-state/initial.state';

@Component({
    selector: 'app-orders-item',
    templateUrl: './orders-item.component.html',
    styleUrls: ['./orders-item.component.scss']
})
export class OrdersItemComponent implements OnInit {
    @Input() props!: IOrderItem;

    products: ProductsInterface[] = [];
    items: ICartItem[] | undefined;
    item: ICartItem | undefined;

    @Select(InitialState.getProducts) products$: Observable<InitialStateResponseInterface> | undefined;

    ngOnInit(): void {
        this.initializeValues();
        this.filteredItems(this.props.order);
    }

    initializeValues() {
        this.products$?.subscribe((res: InitialStateResponseInterface) => {
            this.products = res.products;
        });
    }

    filteredItems(items: ICartItem[]) {
        this.items = items;
    }

    filteredItem(id: number) {
        const product = this.products.find(i => i.id === id);
        return product?.name;
    }
}
