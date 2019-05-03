import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductStore } from 'src/app/stores/product-store';
import { Company } from 'src/app/models/company.model';
import { AppMenu } from 'src/app/models/app-menu.model';
import { AppMenuService } from 'src/app/services/app-menu.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  appMenu: AppMenu;

  products: Product[];

  originalId: number;
  selectedProduct: Product = {
    id: null,
    asin: '',
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

  constructor(private productStore: ProductStore, private appMenuService: AppMenuService) {
    this.productStore.init();
  }

  ngOnInit() {
    // this.appMenu = this.appMenuService.getAppMenu();
    this.appMenuService.currentAppMenu$.subscribe(appMenu => this.appMenu = appMenu);

    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url" + this.appMenu.url);

    this.appMenu.id = 3;
    this.appMenu.screenName = "productScreen";
    this.appMenu.url = "product.component";
    this.appMenuService.setAppMenu(this.appMenu);

    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url" + this.appMenu.url);
    
    this.productStore.getAll$().subscribe(products => { this.products = products; })
  }

  routeToCompanies(product: Product): void {
    // TODO need to query for companies associted with the product.  This means the controller on the backend needs a method for this.
    this.selectedProduct = product;
    console.log('routeToCompanies(): called...');
    var companies: Company[] = product.companys;
    for (var i in companies) {
      console.log("ID=" + companies[i].id)
      console.log("Company Name=" + companies[i].companyName)
    }
    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url=" + this.appMenu.url);
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }
}
