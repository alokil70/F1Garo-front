import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
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
