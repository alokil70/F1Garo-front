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

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxsModule.forRoot([InitialState], {
            developmentMode: !environment.production
        }),
        // NgxsLoggerPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        HttpClientModule,
        OrderCreateModule
    ],
    providers: [InitialStateService],
    bootstrap: [AppComponent]
})
export class AppModule {}
