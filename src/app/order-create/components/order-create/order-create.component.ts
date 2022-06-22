import { IOrderItem } from './../../../shared/models/order.model';
import { OrdersService } from './../../../shared/modules/cash/orders/services/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-order-create',
    templateUrl: './order-create.component.html',
    styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {
    order$!: Observable<IOrderItem>;
    ord$: any;
    private routeSub!: Subscription;

    constructor(private route: ActivatedRoute, private router: Router, private service: OrdersService) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            const id: number = params['id'];
            this.service.getCartFromOrder(id);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

    /* gotoHeroes(hero: Hero) {
        const heroId = hero ? hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
    } */
}
