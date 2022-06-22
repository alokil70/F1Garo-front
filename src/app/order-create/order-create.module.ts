import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../shared/modules/cash/products/products.module';
import { OrdersModule } from '../shared/modules/cash/orders/orders.module';

const routes = [
    {
        path: 'cash/order/:id',
        component: OrderCreateComponent
    },
    { path: '**', redirectTo: '/cash/orders' }
];
@NgModule({
    declarations: [OrderCreateComponent],
    imports: [CommonModule, RouterModule.forChild(routes), OrdersModule, ProductsModule]
})
export class OrderCreateModule {}
