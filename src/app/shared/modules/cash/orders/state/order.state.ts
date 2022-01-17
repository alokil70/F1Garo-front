import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { InitialState } from '../../../../state/initial-state/initial.state';
import { append, patch } from '@ngxs/store/operators';
import { IOrder, IOrderItem } from '../../../../models/order.model';

export class SaveOrder {
    static type = '[ORDER] SaveOrder';
    constructor(public readonly payload: IOrderItem) {}
}

export class UpdateOrder {
    static type = '[ORDER] UpdateOrder';
    constructor(public readonly payload: IOrder) {}
}

export class RemoveOrder {
    static type = '[ORDER] RemoveOrder';
    constructor(public readonly payload: number) {}
}

@State<IOrder>({
    name: 'order',
    defaults: {
        order: []
    }
})
@Injectable()
export class OrderState {
    @Selector([InitialState.getProducts])
    static getOrder(state: IOrder, initialState: InitialState) {
        const prod = initialState;
        console.log('state.cart', state.order);
        return state.order;
    }

    @Action(SaveOrder)
    SaveOrder(ctx: StateContext<IOrder>, { payload }: SaveOrder) {
        ctx.setState(
            patch({
                order: append([payload])
            })
        );
        /*if (ctx.getState().cart.some(item => item.id === payload.id)) {
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
        }*/
    }

    /*@Action(UpdateItem)
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
    }*/
}
