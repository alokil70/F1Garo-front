import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddToCart, CartState, RemoveItem, UpdateItem } from '../../state/cart.state';
import { ICartItem } from '../../../../../models/cart.model';

@Component({
    selector: 'app-order-cart',
    templateUrl: './order-cart.component.html',
    styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {
    @Select(CartState.getCart)
    cart$: Observable<ICartItem[]> | undefined;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    initializeValues() {}

    addToCart(id: number) {
        const item: ICartItem = {
            id,
            quantity: 1
        };
        this.store.dispatch(new AddToCart(item));
    }

    deleteItem(index: number) {
        this.store.dispatch(new RemoveItem(index));
    }

    updateItem(item: ICartItem, quantity = 1) {
        const obj: ICartItem = {
            id: item.id,
            quantity
        };
        this.store.dispatch(new UpdateItem(obj));
    }
}
