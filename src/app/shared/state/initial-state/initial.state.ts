import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { GetInitialState } from './initial-state.action';
import { InitialStateService } from './initial-state.service';
import { InitialStateResponseInterface } from './initial-state-response.interface';
import { IProds, IProduct } from '../../models/product.model';

@State<InitialStateResponseInterface>({
    name: 'initialState',
    defaults: {
        orders: [],
        products: [],
        categories: []
    }
})
@Injectable()
export class InitialState {
    constructor(private initialStateService: InitialStateService) {}

    @Selector()
    static getOrders(state: InitialStateResponseInterface) {
        return state.orders;
    }

    @Selector()
    static getProducts(state: IProduct) {
        return state.products;
    }

    @Selector()
    static getProds(state: IProds) {
        return state.products.products;
    }

    @Selector()
    static getCategories(state: InitialStateResponseInterface) {
        return state.categories;
    }

    @Action(GetInitialState)
    getInitialState(ctx: StateContext<InitialStateResponseInterface>) {
        return this.initialStateService.getInitialState('/initial-state').pipe(
            tap((res: InitialStateResponseInterface) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    orders: res.orders,
                    products: res.products,
                    categories: res.categories
                });
            })
        );
    }
}
