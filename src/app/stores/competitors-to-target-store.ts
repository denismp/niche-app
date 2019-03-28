import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from './store';
import { CompetitorsToTarget } from '../models/competitors-to-target.model';
import { CompetitorsToTargetService } from '../services/competitors-to-target.service';

@Injectable({
    providedIn: 'root'
})
export class CompetitorsToTargetStore extends Store<CompetitorsToTarget[]>{

    constructor(private compititorsToTarget: CompetitorsToTargetService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.compititorsToTarget.get$().pipe(tap(this.store)).subscribe();
    }
}
