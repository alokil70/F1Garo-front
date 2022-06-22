import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { append, patch, updateItem } from '@ngxs/store/operators';
import { IOrder, IOrderItem } from '../../../../models/order.model';

export class CreateOrder {
    static type = '[ORDER] CreateOrder';
    constructor(public readonly payload: IOrderItem) {}
}

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
    @Selector()
    static getOrder(state: IOrder) {
        return state.order;
    }

    @Action(CreateOrder)
    createOrder(ctx: StateContext<IOrder>, { payload }: SaveOrder) {
        ctx.setState(
            patch({
                order: append([payload])
            })
        );
    }

    @Action(SaveOrder)
    saveOrder(ctx: StateContext<IOrder>, { payload }: SaveOrder) {
        const order = ctx.getState().order.find(i => i.id === payload.id);
        if (order) {
            console.log('from state saveorder const order', order);
        }
        ctx.setState(
            patch({
                order: updateItem(i => i?.id === payload.id, payload)
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
