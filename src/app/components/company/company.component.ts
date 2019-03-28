import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyStore } from 'src/app/stores/company-store';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companys: Company[];

  originalId: number;
  selectedCompany: Company = {
    id: null,
    email: '',
    companyName: '',
    webSite: '',
    phone: '',
    notes: '',
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null,
    products: null
  };

  @Input() set company(value: Company) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedCompany = Object.assign({}, value);
  }

  constructor(private companyStore: CompanyStore) {
    this.companyStore.init();
  }

  ngOnInit() {
    this.companyStore.getAll$().subscribe(companys => { this.companys = companys; })
  }

  routeToProducts(company: Company): void {
    this.selectedCompany = company;
    console.log('routeToProducts(): called...');
    var products: Product[] = company.products;
    for (var i in products) {
      console.log("ID=" + products[i].id)
      console.log("ASIN=" + products[i].asin)
    }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }

}
