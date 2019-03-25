import { Injectable } from '@angular/core';
import { Store } from './store';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductStore extends Store<Product[]>{
    constructor(private productService: ProductService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.productService.get$().pipe(tap(this.store)).subscribe();
    }
}
