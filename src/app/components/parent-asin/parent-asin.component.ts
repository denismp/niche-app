import { Component, OnInit, Input } from '@angular/core';
import { ParentAsin } from 'src/app/models/parent-asin.model';
import { ParentAsinStore } from 'src/app/stores/parent-asin-store';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-parent-asin',
  templateUrl: './parent-asin.component.html',
  styleUrls: ['./parent-asin.component.css']
})
export class ParentAsinComponent implements OnInit {
  parentAsins: ParentAsin[];

  originalId: number;
  selectedParentAsin: ParentAsin = {
    id: null,
    asin: '',
    childAsins: null,
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null
  };

//   export interface ParentAsin {
//     id: number;
//     asin: string;
//     childAsins: Product[];
//     createdBy: string;
//     createdDate: Date;
//     updatedBy: string;
//     updatedDate: Date;
// }

  @Input() set parentAsin(value: ParentAsin) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedParentAsin = Object.assign({}, value);
  }

  constructor(private parentAsinStore: ParentAsinStore) {
    this.parentAsinStore.init();
  }

  ngOnInit() {
    this.parentAsinStore.getAll$().subscribe(parentAsins => { this.parentAsins = parentAsins; })
  }

  routeToProducts(parentAsin: ParentAsin): void {
    this.selectedParentAsin = parentAsin;
    console.log('routeToProducts(): called...');
    // console.log("ID=" + parentAsin.product.id);
    // console.log("ASIN=" + parentAsin.product.asin);
    var products: Product[] = parentAsin.childAsins;
    for (var i in products) {
      console.log("ID=" + products[i].id)
      console.log("ASIN=" + products[i].asin)
    }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }

}
