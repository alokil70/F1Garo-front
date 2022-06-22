import { AuthState } from './../../state/auth-state';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { concat } from 'rxjs';
import { Login } from '../../state/auth-state';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-cash',
    templateUrl: './login-cash.component.html',
    styleUrls: ['./login-cash.component.scss']
})
export class LoginCashComponent implements OnInit {
    formGroup!: FormGroup;
    code = '';
    pass = '';
    codeFocus = true;
    isAuth$: boolean | undefined;

    constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeValues(): void {
        /*this.isSubmitting$ = this.store.select(isSubmittingSelector);
		this.backendErrors$ = this.store.select(validationErrorsSelector);*/
        this.store.select(AuthState.isAuthenticated).subscribe(v => (this.isAuth$ = v));
    }

    initializeForm(): void {
        this.formGroup = this.formBuilder.group({
            code: [this.code],
            password: [this.pass]
        });
    }

    onFormSubmit(): void {
        const request = {
            user: this.formGroup.value
        };
        if (!request.user.code) {
            request.user.code = this.code;
        }
        if (!request.user.password) {
            request.user.password = this.pass;
        }
        this.store.dispatch(new Login(request));
    }

    keyEvent($event: string) {
        this.code += $event;
        setTimeout(() => this.login(), 1200);
    }

    login() {
        this.store.dispatch(new Login({ user: { code: this.code, password: '10' } }));
        this.code = '';
        if (this.isAuth$) {
            void this.router.navigate(['/cash/orders']);
        }
    }
}
