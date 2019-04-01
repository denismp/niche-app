import { Component, OnInit, Input } from '@angular/core';
import { CriteriaYesNo } from 'src/app/models/criteria-yes-no.model';
import { CriteriaYesNoStore } from 'src/app/stores/criteria-yes-no-store';

@Component({
  selector: 'app-criteria-yes-no',
  templateUrl: './criteria-yes-no.component.html',
  styleUrls: ['./criteria-yes-no.component.css']
})
export class CriteriaYesNoComponent implements OnInit {
  criteriaYesNos: CriteriaYesNo[];

  originalId: number;
  selectedCriteriaYesNo: CriteriaYesNo = {
    id: null,
    yes: null,
    product: null,
    checkPointCriterias: null,
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null
  };

  @Input() set author(value: CriteriaYesNo) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedCriteriaYesNo = Object.assign({}, value);
  }

  constructor(private criteriaYesNoStore: CriteriaYesNoStore) {
    this.criteriaYesNoStore.init();
  }

  ngOnInit() {
    this.criteriaYesNoStore.getAll$().subscribe(criteriaYesNos => { this.criteriaYesNos = criteriaYesNos; })
  }

}
// export interface CriteriaYesNo {
//   id: number;
//   yes: boolean;
//   product: Product;
//   checkPointCriterias: CheckPointCriteria[];
//   createdBy: string;
//   createdDate: Date;
//   updatedBy: string;
//   updatedDate: Date;
// }