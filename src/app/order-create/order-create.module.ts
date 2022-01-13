import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../shared/modules/cash/products/products.module';
import { OrdersModule } from '../shared/modules/cash/orders/orders.module';
import { TopBarModule } from '../shared/modules/top-bar/top-bar.module';
import { BottomBarModule } from '../shared/modules/bottom-bar/bottom-bar.module';

const route = [
    {
        path: 'cash/order',
        component: OrderCreateComponent
    }
];
@NgModule({
    declarations: [OrderCreateComponent],
    imports: [CommonModule, RouterModule.forChild(route), TopBarModule, BottomBarModule, OrdersModule, ProductsModule]
})
export class OrderCreateModule {}
