import { ButtonModule } from './../button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';

@NgModule({
    declarations: [BottomBarComponent],
    exports: [BottomBarComponent],
    imports: [CommonModule, ButtonModule]
})
export class BottomBarModule {}
