import { Component, OnInit } from '@angular/core';
import { OrdersInterface } from '../../../shared/types/orders.interface';
import { ProductsInterface } from '../../../shared/types/products.interface';
import { CategoryInterface } from '../../../shared/types/category.interface';
import { Select, Store } from '@ngxs/store';
import { InitialState } from '../../../shared/state/initial-state/initial.state';
import { Observable } from 'rxjs';
import { InitialStateResponseInterface } from '../../../shared/state/initial-state/initial-state-response.interface';
import { CartInterface } from '../../../shared/modules/cash/orders/types/cart.interface';
import { AddToCart } from '../../../shared/modules/cash/orders/state/cart.state';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    orders: OrdersInterface[] = [];
    products: ProductsInterface[] = [];
    products_tmp: ProductsInterface[] = [];
    categories: CategoryInterface[] = [];
    category_tmp: CategoryInterface[] = [];
    product: ProductsInterface | undefined;
    isCategoryVisible: CategoryInterface | undefined;
    productSelected = '';

    @Select(InitialState.getOrders) orders$: Observable<InitialStateResponseInterface> | undefined;
    @Select(InitialState.getProducts) products$: Observable<InitialStateResponseInterface> | undefined;
    @Select(InitialState.getCategories) categories$: Observable<InitialStateResponseInterface> | undefined;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues();
    }

    initializeValues() {
        this.orders$?.subscribe((res: InitialStateResponseInterface) => {
            this.orders = res.orders;
        });
        this.products$?.subscribe((res: InitialStateResponseInterface) => {
            this.products = res.products;
        });
        this.categories$?.subscribe((res: InitialStateResponseInterface) => {
            this.categories = res.categories;
            this.category_tmp = res.categories;
        });
    }

    categorySelect(item: { id: number }) {
        this.isCategoryVisible = this.categories.find(cat => cat.id === item.id);
        this.category_tmp = [];
        this.products_tmp = this.products.filter(p => p.category.id === item.id);
    }

    productSelect(item: ProductsInterface) {
        this.productSelected = 'red';
        this.product = item;
    }

    /*addToCart(id: any) {
        const item: CartInterface = {
            id,
            quantity: 1
        };
        this.store.dispatch(new AddToCart(item));
    }*/

    backToRoot() {
        this.productSelected = '';
        this.products_tmp = [];
        this.category_tmp = this.categories;
    }
}
