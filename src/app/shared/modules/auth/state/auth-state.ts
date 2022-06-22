import { Router } from '@angular/router';
import { IUser, IUserAuth } from './../../../models/user.model';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: IUserAuth) {}
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

@State<IUser>({
    name: 'auth',
    defaults: {
        token: null,
        username: null,
        email: null,
        displayName: null
    }
})
@Injectable()
export class AuthState {
    @Selector()
    static token(state: IUser): string | null {
        return state.token;
    }

    @Selector()
    static isAuthenticated(state: IUser): boolean {
        return !!state.token;
    }

    constructor(private authService: AuthService) {}

    @Action(Login)
    login(ctx: StateContext<IUser>, action: Login) {
        return this.authService.login(action.payload).pipe(
            tap(result => {
                console.log('action login', result);
                ctx.patchState({
                    token: result.token
                });
            })
        );
    }

    /* @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
        const state = ctx.getState();
        return this.authService.logout(state.token).pipe(
            tap(() => {
                ctx.setState({
                    token: null,
                    username: null
                });
            })
        );
    } */
}
