import { Injectable } from '@angular/core';
import { Store } from './store';
import { ShipmentInfo } from '../models/shipment-info.model';
import { ShipmentInfoService } from '../services/shipment-info.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ShipmentInfoStore extends Store<ShipmentInfo[]>{
    constructor(private shipmentInfoService: ShipmentInfoService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.shipmentInfoService.get$().pipe(tap(this.store)).subscribe();
    }
}
