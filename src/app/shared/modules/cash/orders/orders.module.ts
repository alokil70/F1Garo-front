import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersService } from './services/orders.service';
import { OrdersItemComponent } from './components/orders-item/orders-item.component';
import { OrderCartComponent } from './components/order-cart/order-cart.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderCartItemComponent } from './components/order-cart-item/order-cart-item.component';
import { NgxsModule } from '@ngxs/store';
import { CartState } from './state/cart.state';

@NgModule({
    declarations: [
        OrdersComponent,
        OrdersItemComponent,
        OrderCartComponent,
        OrderListComponent,
        OrderCartItemComponent
    ],
    imports: [CommonModule, NgxsModule.forFeature([CartState])],
    exports: [OrdersComponent, OrdersItemComponent, OrderCartComponent, OrderListComponent],
    providers: [OrdersService]
})
export class OrdersModule {}
