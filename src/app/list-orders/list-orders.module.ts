import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { RouterModule } from '@angular/router';
import { OrdersModule } from '../shared/modules/cash/orders/orders.module';

const routes = [
    {
        path: 'cash/orders',
        component: ListOrdersComponent
    }
];

@NgModule({
    declarations: [ListOrdersComponent],
    imports: [CommonModule, RouterModule.forChild(routes), OrdersModule]
})
export class ListOrdersModule {}
