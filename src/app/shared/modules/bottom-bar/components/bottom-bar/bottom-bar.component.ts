import { Router } from '@angular/router';
import { OrdersService } from './../../../cash/orders/services/orders.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-bottom-bar',
    templateUrl: './bottom-bar.component.html',
    styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
    btn = 'назад';
    btn2 = 'быстр';
    btn3 = 'getord';
    img = '../../../../../../assets/icons/arrow_back_black_24dp.svg';

    constructor(private service: OrdersService, private router: Router) {}

    saveOrder() {
        const orderId = this.service.getCurrentOrderId();
        this.service.createOrder(orderId);
        void this.router.navigate(['/cash/orders']);
    }
    getOrder() {
        const orderId = this.service.getCurrentOrderId();
        const tmp = this.service.getOrder(orderId);
        console.log('getOrderFromBottom', tmp);
    }
}
