import { Injectable } from '@angular/core';
import { Store } from './store';
import { ContactInfo } from '../models/contact-info.model';
import { tap } from 'rxjs/operators';
import { ContactInfoService } from '../services/contact-info.service';

@Injectable({
    providedIn: 'root'
})
export class ContactInfoStore extends Store<ContactInfo[]>{
    constructor(private contactInfoService: ContactInfoService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.contactInfoService.get$().pipe(tap(this.store)).subscribe();
    }
}
