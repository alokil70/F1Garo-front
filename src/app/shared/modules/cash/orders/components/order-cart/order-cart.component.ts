import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, pipe } from 'rxjs';
import { AddToCart, CartState, RemoveItem, UpdateItem } from '../../state/cart.state';
import { OrderState, SaveOrder } from '../../state/order.state';
import { ICart, ICartItem } from '../../../../../models/cart.model';
import { IOrderItem } from '../../../../../models/order.model';
import { map } from 'rxjs/operators';
import { CategoryInterface } from '../../../../../types/category.interface';
import { InitialState } from '../../../../../state/initial-state/initial.state';
import { InitialStateResponseInterface } from '../../../../../state/initial-state/initial-state-response.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-cart',
    templateUrl: './order-cart.component.html',
    styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {
    @Select(OrderState.getOrder)
    orders$: Observable<IOrderItem[]> | undefined;

    @Select(CartState.getCart)
    cart$: Observable<ICartItem[]> | undefined;

    constructor(private store: Store, private router: Router) {}

    ngOnInit(): void {
        this.initializeValues();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    initializeValues() {}

    public addToCart(id: number) {
        const item: ICartItem = {
            id,
            quantity: 1
        };
        this.store.dispatch(new AddToCart(item));
    }

    public deleteItem(index: number) {
        this.store.dispatch(new RemoveItem(index));
    }

    public updateItem(item: ICartItem, quantity = 1) {
        const obj: ICartItem = {
            id: item.id,
            quantity
        };
        this.store.dispatch(new UpdateItem(obj));
    }

    saveOrder() {
        let orders: IOrderItem[] = [];
        this.orders$?.subscribe(v => {
            orders = v;
        });
        console.log('OrderState.getOrder ', orders);
        //if (this.cart$) {
        this.cart$?.subscribe(v => {
            const obj: IOrderItem = {
                id: 2,
                order: v,
                createdAt: new Date()
            };
            console.log('SaveOrder', obj);
            this.store.dispatch(new SaveOrder(obj));
        });
        //}
        void this.router.navigate(['/cash/orders']);
    }
}
