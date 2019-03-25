import { Component, OnInit, Input } from '@angular/core';
import { OurCompany } from 'src/app/models/our-company.model';
import { OurCompanyStore } from 'src/app/stores/our-company-store';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-our-company',
  templateUrl: './our-company.component.html',
  styleUrls: ['./our-company.component.css']
})
export class OurCompanyComponent implements OnInit {

  ourCompanys: OurCompany[];

  originalId: number;
  selectedOurCompany: OurCompany = {
    id: null,
    company: null,
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null
  };

  @Input() set ourCompany(value: OurCompany) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedOurCompany = Object.assign({}, value);
  }

  constructor(private ourCompanyStore: OurCompanyStore) {
    this.ourCompanyStore.init();
  }

  ngOnInit() {
    this.ourCompanyStore.getAll$().subscribe(ourCompanys => { this.ourCompanys = ourCompanys; })
  }

  routeToOurProducts(ourCompany: OurCompany): void {
    this.selectedOurCompany = ourCompany;
    console.log('routeToOurProducts(): called...');
    var products: Product[] = ourCompany.company.products;
    for (var i in products) {
      console.log("ID=" + products[i].id)
      console.log("ASIN=" + products[i].asin)
    }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }
}
