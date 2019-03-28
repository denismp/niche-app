import { Injectable } from '@angular/core';
import { Store } from './store';
import { Company } from '../models/company.model';
import { CompanyService } from '../services/company.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CompanyStore extends Store<Company[]>{

    constructor(private ourcompanyService: CompanyService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.ourcompanyService.get$().pipe(tap(this.store)).subscribe();
    }
}
