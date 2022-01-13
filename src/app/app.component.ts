import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { GetInitialState } from './shared/state/initial-state/initial-state.action';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'F1Garo-front';
    isLoggedIn$: Observable<boolean> | undefined;

    constructor(private store: Store) {}

    ngOnInit(): void {
        /*this.isLoggedIn$ = this.store.select(isLoggedInSelector);
        this.store.dispatch(getCurrentUserCashAction());*/
        this.store.dispatch(new GetInitialState());
        // this.store.dispatch(initialStateAction({ url: '/initial-state' }));
    }
}
