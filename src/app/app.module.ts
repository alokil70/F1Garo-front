import { OfficeModule } from './office/office.module';
import { AuthModule } from './shared/modules/auth/auth.module';
import { ButtonModule } from './shared/modules/button/button.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderCreateModule } from './order-create/order-create.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environments/environment';
import { InitialState } from './shared/state/initial-state/initial.state';
import { NgxsModule } from '@ngxs/store';
import { InitialStateService } from './shared/state/initial-state/initial-state.service';
import { AppRoutingModule } from './app-routing.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { BottomBarModule } from './shared/modules/bottom-bar/bottom-bar.module';
import { ListOrdersModule } from './list-orders/list-orders.module';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxsModule.forRoot([InitialState], {
            developmentMode: !environment.production
        }),
        NgxsStoragePluginModule.forRoot({
            key: 'auth.token'
        }),
        // NgxsLoggerPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        HttpClientModule,
        AuthModule,
        OfficeModule,
        ListOrdersModule,
        OrderCreateModule,
        TopBarModule,
        BottomBarModule,
        ButtonModule
    ],
    providers: [InitialStateService],
    bootstrap: [AppComponent]
})
export class AppModule {}
