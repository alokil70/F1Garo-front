import { OrdersInterface } from '../../../../types/orders.interface';

export interface GetOrdersResponseInterface {
    orders: OrdersInterface[];
    ordersCount: number;
}
