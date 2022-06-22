import { OrdersService } from './../../services/orders.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { OrderState } from '../../state/order.state';
import { Observable } from 'rxjs';
import { IOrderItem } from 'src/app/shared/models/order.model';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
    @Select(OrderState.getOrder)
    orders$: Observable<IOrderItem[]> | undefined;

    constructor(private router: Router, private service: OrdersService) {}

    createOrder(num: number) {
        this.service.setCurrentOrderId(num);
        void this.router.navigate(['/cash/order/', num]);
    }
}
