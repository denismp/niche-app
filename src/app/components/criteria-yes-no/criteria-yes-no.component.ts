import { Component, OnInit, Input } from '@angular/core';
import { CriteriaYesNo } from 'src/app/models/criteria-yes-no.model';
import { CriteriaYesNoStore } from 'src/app/stores/criteria-yes-no-store';
import { CheckPointCriteria } from 'src/app/models/check-point-criteria.model';

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

  routeToCheckpointCriterias(criteriaYesNo: CriteriaYesNo): void {
    this.selectedCriteriaYesNo = criteriaYesNo;
    console.log('routeToProducts(): called...');
    // console.log("ID=" + parentAsin.product.id);
    // console.log("ASIN=" + parentAsin.product.asin);
    var checkPointCriterias: CheckPointCriteria[] = criteriaYesNo.checkPointCriterias;
    for (var i in checkPointCriterias) {
      console.log("ID=" + checkPointCriterias[i].id);
      console.log("NAME=" + checkPointCriterias[i].criteriaName);
      console.log("POINTS=" + checkPointCriterias[i].points);
    }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
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