import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-login-cash-kbd',
    templateUrl: './login-cash-kbd.component.html',
    styleUrls: ['./login-cash-kbd.component.scss']
})
export class LoginCashKBDComponent {
    @Output() output: EventEmitter<any> = new EventEmitter();
    @Output() formOut: EventEmitter<any> = new EventEmitter();
    keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    formSubmit(): void {
        this.formOut.emit();
    }
}
