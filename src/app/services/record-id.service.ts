import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordIdService {
  private recordIdSource = new BehaviorSubject(0);
  currentRecordId = this.recordIdSource.asObservable();

  constructor() { }

  changeRecordId(id: number) {
    this.recordIdSource.next(id);
  }
}
