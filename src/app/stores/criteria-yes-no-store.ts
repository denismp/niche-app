import { Injectable } from '@angular/core';
import { CriteriaYesNo } from '../models/criteria-yes-no.model';
import { Store } from './store';
import { CriteriaYesNoService } from '../services/criteria-yes-no.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CriteriaYesNoStore extends Store<CriteriaYesNo[]>{

    constructor(private criteriaYesNoService: CriteriaYesNoService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.criteriaYesNoService.get$().pipe(tap(this.store)).subscribe();
    }
}
