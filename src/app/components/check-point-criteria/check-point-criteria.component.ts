import { Component, OnInit, Input } from '@angular/core';
import { CheckpointCriteriaStore } from 'src/app/stores/checkpoint-criteria-store';
import { CheckPointCriteria } from 'src/app/models/check-point-criteria.model';

@Component({
  selector: 'app-check-point-criteria',
  templateUrl: './check-point-criteria.component.html',
  styleUrls: ['./check-point-criteria.component.css']
})
export class CheckPointCriteriaComponent implements OnInit {
  checkpointCriterias: CheckPointCriteria[];

  originalId: number;
  selectedCheckPointCriteria: CheckPointCriteria = {
    id: null,
    criteriaName: '',
    points: null,
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null
  };

  @Input() set author(value: CheckPointCriteria) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedCheckPointCriteria = Object.assign({}, value);
  }

  constructor(private checkpointCriteriaStore: CheckpointCriteriaStore) {
    this.checkpointCriteriaStore.init();
  }

  ngOnInit() {
    this.checkpointCriteriaStore.getAll$().subscribe(checkpointCriterias => { this.checkpointCriterias = checkpointCriterias; })
  }

}
// export interface CheckPointCriteria {
//   id: number;
//   criteriaName: string;
//   points: number;
//   createdBy: string;
//   createdDate: Date;
//   updatedBy: string;
//   updatedDate: Date;
// }
