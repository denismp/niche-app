import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductStore } from 'src/app/stores/product-store';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  originalId: number;
  selectedProduct: Product = {
    id: null,
    asin: null,
    productPageLink: '',
    twentyOnePointScore: null,
    primeLowPrice: null,
    totalUnitsSoldPerMonth: null,
    totalRevenuePerMonth: null,
    numberOfCompetitiveSellers: null,
    unitsPerMonth: null,
    revenuePerMonth: null,
    estimatedProductCost: null,
    actualProductCost: null,
    estimatedAmazonFees: null,
    actualAmazonFees: null,
    estimatedShippingCost: null,
    actualShippingCost: null,
    estimatedProcessingCost: null,
    actualProcessingCost: null,
    estimatedProfitMargin: null,
    actualProfitMargin: null,
    estimatedROI: null,
    actualROI: null,
    companys: null,
    contactInfos: null,
    criteriaYesNos: null,
    competitorsToTarget: null,
    shipmentInfo: null,
    parentAsin: null,
    notes: '',
    createdBy: '',
    createdDate: null,
    updatedBy: '',
    updatedDate: null
  };

  @Input() set product(value: Product) {
    if (value) {
      this.originalId = value.id;
    }
    this.selectedProduct = Object.assign({}, value);
  }

  constructor(private productStore: ProductStore) {
    this.productStore.init();
  }

  ngOnInit() {
    this.productStore.getAll$().subscribe(products => { this.products = products; })
  }

  routeToCompanies(product: Product): void {
    this.selectedProduct = product;
    console.log('routeToCompany(): called...');
    var companies: Company[] = product.companys;
    for (var i in companies) {
      console.log("ID=" + companies[i].id)
      console.log("Company Name=" + companies[i].companyName)
    }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }
}
