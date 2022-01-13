import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-orders-item',
    templateUrl: './orders-item.component.html',
    styleUrls: ['./orders-item.component.scss']
})
export class OrdersItemComponent {
    @Input() card_props: any;

    constructor() {}
}
