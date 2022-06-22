import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    {
        path: 'manager',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: MainComponent,
                children: [
                    {
                        path: ':id',
                        component: MainComponent
                    },
                    {
                        path: '',
                        component: MainComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    declarations: [LayoutComponent, MainComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class OfficeModule {}
