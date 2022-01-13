import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddToCart, CartState, RemoveItem, UpdateItem } from '../../state/cart.state';
import { CartInterface } from '../../types/cart.interface';

@Component({
    selector: 'app-order-cart',
    templateUrl: './order-cart.component.html',
    styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {
    @Select(CartState)
    cart: Observable<CartInterface[]> | undefined;
    @Select(CartState.getCart)
    it: Observable<CartInterface[]> | undefined;

    constructor(private store: Store) {}

    ngOnInit() {}

    public addToCart(id: number) {
        const item: CartInterface = {
            id,
            quantity: 1
        };
        this.store.dispatch(new AddToCart(item));
    }

    public deleteItem(index: number) {
        this.store.dispatch(new RemoveItem(index));
    }

    public updateItem(item: CartInterface, quantity = 1) {
        const obj: CartInterface = {
            id: item.id,
            quantity
        };
        this.store.dispatch(new UpdateItem(obj));
    }
}
