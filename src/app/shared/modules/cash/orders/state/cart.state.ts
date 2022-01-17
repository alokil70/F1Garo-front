import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { InitialState } from '../../../../state/initial-state/initial.state';
import { ICart, ICartItem } from '../../../../models/cart.model';
import { append, patch, updateItem } from '@ngxs/store/operators';

export class AddToCart {
    static type = '[CART] AddToCart';
    constructor(public readonly payload: ICartItem) {}
}

export class UpdateItem {
    static type = '[CART] UpdateItem';
    constructor(public readonly payload: ICartItem) {}
}

export class RemoveItem {
    static type = '[CART] RemoveItem';
    constructor(public readonly payload: number) {}
}

@State<ICart>({
    name: 'cart',
    defaults: {
        cart: []
    }
})
@Injectable()
export class CartState {
    @Selector([InitialState.getProducts])
    static getCart(state: ICart, initialState: InitialState) {
        const prod = initialState;
        console.log('state.cart', state.cart);
        return state.cart;
    }

    @Action(AddToCart)
    addToCart(ctx: StateContext<ICart>, { payload }: AddToCart) {
        if (ctx.getState().cart.some(item => item.id === payload.id)) {
            ctx.getState().cart.forEach(item => {
                if (item.id === payload.id) {
                    const newItem = {
                        ...item
                    };
                    newItem.quantity++;
                    ctx.setState(
                        patch({
                            cart: updateItem(i => i?.id === payload.id, newItem)
                        })
                    );
                }
            });
        } else {
            ctx.setState(
                patch({
                    cart: append([payload])
                })
            );
        }
    }

    @Action(UpdateItem)
    updateItem({ getState, setState }: StateContext<ICartItem[]>, { payload }: UpdateItem) {
        console.log('update payload', payload);
        const newState: ICartItem[] = [];
        getState().forEach(item => {
            if (item.id === payload.id) {
                item.quantity = payload.quantity;
            }
            newState.push(item);
        });
        setState(newState);
    }

    @Action(RemoveItem)
    removeItem({ getState, setState }: StateContext<ICartItem[]>, { payload }: RemoveItem) {
        setState(getState().filter((item, i) => i !== payload));
    }
}
