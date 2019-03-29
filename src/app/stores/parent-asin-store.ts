import { Injectable } from '@angular/core';
import { Store } from './store';
import { ParentAsin } from '../models/parent-asin.model';
import { ParentAsinService } from '../services/parent-asin.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ParentAsinStore extends Store<ParentAsin[]>{
    constructor(private contactInfoService: ParentAsinService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.contactInfoService.get$().pipe(tap(this.store)).subscribe();
    }
}
