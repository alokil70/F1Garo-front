import { ProfileInterface } from './profile.interface';
import { ShiftInterface } from './shift.interface';
import { CategoryInterface } from './category.interface';

export interface ProductsInterface {
    id: number;
    title: string;
    name: string;
    author: ProfileInterface;
    creator: string;
    description: string;
    category: CategoryInterface;
    total: number;
    price: number;
    opened: boolean;
    payed: boolean;
    commonShift: ShiftInterface;
    createdAt: string;
    updatedAt: string;
    table: number;
    position: number;
    guid: string;
}
