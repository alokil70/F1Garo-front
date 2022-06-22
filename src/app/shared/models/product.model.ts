export interface IProduct {
    products: IProductItem[];
}
export interface IProds {
    products: IProduct;
}

export interface IProductItem {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productType: string;
    productBrand: string;
}
