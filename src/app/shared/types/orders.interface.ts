import { ProfileInterface } from './profile.interface';
import { ShiftInterface } from './shift.interface';

export interface OrdersInterface {
    title: string;
    num: number;
    author: ProfileInterface;
    creator: string;
    description: string;
    products: [];
    total: number;
    opened: boolean;
    payed: boolean;
    commonShift: ShiftInterface;
    createdAt: string;
    updatedAt: string;
    table: number;
    position: number;
    guid: string;
}
