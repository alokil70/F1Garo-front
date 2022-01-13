import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CartInterface } from '../types/cart.interface';
import { Injectable } from '@angular/core';
import { updateItem } from '@ngxs/store/operators';
import { InitialState } from '../../../../state/initial-state/initial.state';

export class AddToCart {
    static type = '[CART] AddToCart';

    constructor(public readonly payload: CartInterface) {}
}

export class UpdateItem {
    static type = '[CART] UpdateItem';

    constructor(public readonly payload: CartInterface) {}
}

export class RemoveItem {
    static type = '[CART] RemoveItem';

    constructor(public readonly payload: number) {}
}

@State<CartInterface[]>({
    name: 'cart',
    defaults: []
})
@Injectable()
export class CartState {
    @Selector([InitialState.getProducts])
    static getCart(state: CartState, initialState: InitialState) {
        const prod = initialState;
        console.log('products', prod);
        return state;
    }

    @Action(AddToCart)
    addToCart({ getState, setState }: StateContext<CartInterface[]>, { payload }: AddToCart) {
        if (getState().some(item => item.id === payload.id)) {
            getState().forEach(item => {
                if (item.id === payload.id) {
                    const newItem = {
                        ...item
                    };
                    newItem.quantity++;
                    setState(updateItem(i => i?.id === payload.id, newItem));
                }
            });
        } else {
            setState([...getState(), payload]);
        }
    }

    @Action(UpdateItem)
    updateItem({ getState, setState }: StateContext<CartInterface[]>, { payload }: UpdateItem) {
        console.log('update payload', payload);
        const newState: CartInterface[] = [];
        getState().forEach(item => {
            if (item.id === payload.id) {
                item.quantity = payload.quantity;
            }
            newState.push(item);
        });
        setState(newState);
    }

    @Action(RemoveItem)
    removeItem({ getState, setState }: StateContext<CartInterface[]>, { payload }: RemoveItem) {
        setState(getState().filter((item, i) => i !== payload));
    }
}
