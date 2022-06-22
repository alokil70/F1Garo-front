import { InitialState } from './../../../../state/initial-state/initial.state';
import { CartState, CleanCart, AddToCart } from './../state/cart.state';
import { ICartItem } from './../../../../models/cart.model';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { GetOrdersResponseInterface } from '../types/getOrdersResponse.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { IOrderItem } from '../../../../models/order.model';
import { CreateOrder, OrderState, SaveOrder } from './../state/order.state';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    order: Observable<IOrderItem[]> | undefined;
    cart: ICartItem[] = [];
    private currentOrderId!: number;

    constructor(private http: HttpClient, private store: Store) {}

    getOrders(url: string): Observable<GetOrdersResponseInterface> {
        const fullUrl = environment.apiUrl + url;
        return this.http.get<GetOrdersResponseInterface>(fullUrl);
    }

    getOrder(orderId: number) {
        return this.store.select(OrderState.getOrder).subscribe(v =>
            v.find(item => {
                item.id === +orderId;
            })
        );
    }

    getProduct(productId: number, args: string): string {
        let it = '';
        console.log('productId', productId);
        console.log('args', args);
        this.store.select(InitialState.getProds).subscribe(v =>
            v.find(item => {
                if (item.id === +productId) {
                    it = item.name;
                }
            })
        );
        return it;
    }

    getCartFromOrder(orderId: number) {
        this.store.select(OrderState.getOrder).subscribe(v =>
            v.find(i => {
                if (i.id === +orderId) {
                    this.store.dispatch(new CleanCart());
                    i.order.forEach(item => this.store.dispatch(new AddToCart(item)));
                }
            })
        );

        return null; //this.store.dispatch(new AddToCart(currentOrder));
    }

    createOrder(orderId: number) {
        this.store.select(CartState.getCart).subscribe(v => (this.cart = v));
        const order: IOrderItem = {
            id: orderId,
            order: this.cart,
            createdAt: new Date()
        };
        this.cart = [];
        this.store.dispatch(new CleanCart());
        return this.store.dispatch(new SaveOrder(order));
    }

    fillOrders() {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        items.forEach(i => {
            const order: IOrderItem = {
                id: i,
                order: []
            };
            this.store.dispatch(new CreateOrder(order));
        });
    }

    setCurrentOrderId(orderId: number) {
        this.currentOrderId = orderId;
    }

    getCurrentOrderId() {
        return this.currentOrderId;
    }
}
