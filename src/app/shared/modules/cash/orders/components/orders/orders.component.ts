import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GetOrdersResponseInterface } from '../../types/getOrdersResponse.interface';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
    @Input() apiUrl: string | undefined;

    isLoading$: Observable<boolean> | undefined;
    error$: Observable<string | null> | undefined;
    orders$: Observable<GetOrdersResponseInterface | null> | undefined;

    constructor() {}

    initializeValues(): void {
        /*this.isLoading$ = this.store.select(isLoadingSelector);
		this.error$ = this.store.select(errorSelector);
		this.orders$ = this.store.select(ordersSelector);*/
    }

    fetchData(): void {
        // this.store.dispatch(getOrdersAction({ url: this.apiUrl }));
    }
}
