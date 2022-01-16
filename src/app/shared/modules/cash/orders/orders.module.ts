import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersService } from './services/orders.service';
import { OrdersItemComponent } from './components/orders-item/orders-item.component';
import { OrderCartComponent } from './components/order-cart/order-cart.component';
import { OrderCartItemComponent } from './components/order-cart-item/order-cart-item.component';
import { NgxsModule } from '@ngxs/store';
import { CartState } from './state/cart.state';
import { ListUserOrdersComponent } from './components/list-user-orders/list-user-orders.component';

@NgModule({
    declarations: [
        OrdersComponent,
        OrdersItemComponent,
        OrderCartComponent,
        OrderCartItemComponent,
        ListUserOrdersComponent
    ],
    imports: [CommonModule, NgxsModule.forFeature([CartState])],
    exports: [OrdersComponent, OrdersItemComponent, OrderCartComponent, ListUserOrdersComponent],
    providers: [OrdersService]
})
export class OrdersModule {}
