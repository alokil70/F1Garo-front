//import { IAddress } from './address';

import { ICartItem } from './cart.model';

export interface IOrderToCreate {
    basketId: string;
    deliveryMethodId: number;
    //shipToAddress: IAddress;
}

export interface IOrder {
    order: IOrderItem[];
    /*id: number;
    buyerEmail: string;
    orderDate: string;
    shipToAddress: IAddress;
    orderItems: IOrderItem[];
    deliveryMethod: string;
    shippingPrice: number;
    subtotal: number;
    status: string;
    total: number;*/
}

export interface IOrderItem {
    id: number;
    order: ICartItem[];
    createdAt: Date;
    /*productId: number;
    productName: string;
    pictureUrl: string;
    price: number;
    quantity: number;*/
}
