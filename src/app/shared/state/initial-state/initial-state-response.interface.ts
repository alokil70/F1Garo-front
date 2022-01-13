import { OrdersInterface } from '../../types/orders.interface';
import { ProductsInterface } from '../../types/products.interface';
import { CategoryInterface } from '../../types/category.interface';

export interface InitialStateResponseInterface {
    orders: OrdersInterface[];
    products: ProductsInterface[];
    categories: CategoryInterface[];
}
