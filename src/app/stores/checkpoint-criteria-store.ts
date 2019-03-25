import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CheckPointCriteria } from '../models/check-point-criteria.model'
import { Store } from './store';
import { CheckpointCriteriaService } from '../services/checkpoint-criteria.service';

@Injectable({
    providedIn: 'root'
})
export class CheckpointCriteriaStore extends Store<CheckPointCriteria[]>{

    constructor(private checkpointCriteriaService: CheckpointCriteriaService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.checkpointCriteriaService.get$().pipe(tap(this.store)).subscribe();
    }
}
