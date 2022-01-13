import { ProductsInterface } from './products.interface';

export interface CategoryInterface {
    id: number;
    title: string;
    name: string;
    creator: string;
    description: string;
    products: ProductsInterface[];
    createdAt: string;
    updatedAt: string;
    guid: string;
}
