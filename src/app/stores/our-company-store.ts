import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from './store';
import { OurCompany } from '../models/our-company.model';
import { OurCompanyService } from '../services/our-company.service';

@Injectable({
    providedIn: 'root'
})
export class OurCompanyStore extends Store<OurCompany[]>{

    constructor(private ourcompanyService: OurCompanyService) {
        super();
    }

    init = (): void => {
        if(this.getAll()) {return;}

        this.ourcompanyService.get$().pipe(tap(this.store)).subscribe();
    }
}
