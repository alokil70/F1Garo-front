import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { CartState } from '../../state/cart.state';
import { Observable } from 'rxjs';
import { ICartItem } from '../../../../../models/cart.model';
import { IOrderItem } from '../../../../../models/order.model';
import { OrderState } from '../../state/order.state';

@Component({
    selector: 'app-list-user-orders',
    templateUrl: './list-user-orders.component.html',
    styleUrls: ['./list-user-orders.component.scss']
})
export class ListUserOrdersComponent implements OnInit {
    @Select(OrderState.getOrder)
    orders$: Observable<IOrderItem[]> | undefined;

    constructor() {}

    ngOnInit(): void {}
}
