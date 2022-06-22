import { ICartItem } from './../../../../../models/cart.model';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../../../types/products.interface';
import { Select } from '@ngxs/store';
import { InitialState } from '../../../../../state/initial-state/initial.state';
import { Observable } from 'rxjs';
import { InitialStateResponseInterface } from '../../../../../state/initial-state/initial-state-response.interface';

@Component({
    selector: 'app-order-cart-item',
    templateUrl: './order-cart-item.component.html',
    styleUrls: ['./order-cart-item.component.scss']
})
export class OrderCartItemComponent implements OnInit {
    @Input() props!: ICartItem;
    products: ProductsInterface[] = [];
    item: ProductsInterface | undefined;

    @Select(InitialState.getProducts) products$: Observable<InitialStateResponseInterface> | undefined;

    constructor() {}

    ngOnInit(): void {
        this.initializeValues();
        this.filteredItem(this.props.id);
    }

    initializeValues() {
        this.products$?.subscribe((res: InitialStateResponseInterface) => {
            this.products = res.products;
        });
    }

    filteredItem(id: number) {
        this.item = this.products.find(i => i.id === id);
    }
}

/* export class OrderCartItemComponent implements OnInit {
    @Input() props!: ICartItem;
    products: ProductsInterface[] = [];
    item: ProductsInterface | undefined;

    @Select(InitialState.getProducts) products$: Observable<InitialStateResponseInterface> | undefined;

    constructor() {}

    ngOnInit(): void {
        this.initializeValues();
        this.filteredItem(this.props.id);
    }

    initializeValues() {
        this.products$?.subscribe((res: InitialStateResponseInterface) => {
            this.products = res.products;
        });
    }

    filteredItem(id: number) {
        this.item = this.products.find(i => i.id === id);
    }
} */
