import { Component, OnInit, Input } from '@angular/core';
import { CompetitorsToTarget } from 'src/app/models/competitors-to-target.model';
import { CompetitorsToTargetStore } from 'src/app/stores/competitors-to-target-store';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-competitors-to-target',
  templateUrl: './competitors-to-target.component.html',
  styleUrls: ['./competitors-to-target.component.css']
})
export class CompetitorsToTargetComponent implements OnInit {

  competitorsToTargets: CompetitorsToTarget[];

  originalId: number;
  selectedCompetitorsToTarget: CompetitorsToTarget = {
    id: null,
    sellerName: '',
    url: '',
    sellerId: '',
    dateInventoryLastScouted: null,
    notes: '',
    products: null,
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null
  };

  @Input() set competitorsToTarget(value: CompetitorsToTarget) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedCompetitorsToTarget = Object.assign({}, value);
  }

  constructor(private competitorsToTargetStore: CompetitorsToTargetStore) {
    this.competitorsToTargetStore.init();
  }

  ngOnInit() {
    this.competitorsToTargetStore.getAll$().subscribe(competitorsToTargets => { this.competitorsToTargets = competitorsToTargets; })
  }

  routeToProducts(competitorsToTarget: CompetitorsToTarget): void {
    this.selectedCompetitorsToTarget = competitorsToTarget;
    console.log('routeToProducts(): called...');
    var products: Product[] = competitorsToTarget.products;
    for (var i in products) {
      console.log("ID=" + products[i].id)
      console.log("ASIN=" + products[i].asin)
    }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }

}
