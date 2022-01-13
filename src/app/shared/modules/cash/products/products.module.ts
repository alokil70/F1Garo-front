import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsService } from './services/products.service';
import { CategoryPipe } from '../../../pipes/category.pipe';
import { ProductsFeedComponent } from './components/products-feed/products-feed.component';

@NgModule({
    declarations: [ProductItemComponent, CategoryPipe, ProductsFeedComponent],
    imports: [CommonModule],
    exports: [ProductsFeedComponent],
    providers: [ProductsService]
})
export class ProductsModule {}
