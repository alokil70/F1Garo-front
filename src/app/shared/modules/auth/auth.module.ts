import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthState } from './state/auth-state';
import { LoginCashWrapperComponent } from './components/login-cash-wrapper/login-cash-wrapper.component';
import { LoginCashLogoComponent } from './components/login-cash-logo/login-cash-logo.component';
import { LoginCashKBDComponent } from './components/login-cash-kbd/login-cash-kbd.component';
import { LoginCashComponent } from './components/login-cash/login-cash.component';

const routes = [
    {
        path: 'cash',
        component: LoginCashWrapperComponent
    }
];

@NgModule({
    declarations: [LoginCashComponent, LoginCashKBDComponent, LoginCashWrapperComponent, LoginCashLogoComponent],
    imports: [CommonModule, RouterModule.forChild(routes), NgxsModule.forFeature([AuthState]), ReactiveFormsModule],
    providers: [AuthService]
})
export class AuthModule {}
