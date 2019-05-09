import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyStore } from 'src/app/stores/company-store';
import { Product } from 'src/app/models/product.model';
import { AppMenu } from 'src/app/models/app-menu.model';
import { AppMenuService } from 'src/app/services/app-menu.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  appMenu: AppMenu;
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

  constructor(
    private companyStore: CompanyStore,
    private appMenuService: AppMenuService) {
    this.companyStore.init();
  }

  ngOnInit() {
    this.appMenuService.currentAppMenu$.subscribe(appMenu => this.appMenu = appMenu);

    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url" + this.appMenu.url);

    this.appMenu.id = 3;
    this.appMenu.screenName = "companyScreen";
    this.appMenu.url = "/company.component";
    this.appMenuService.setAppMenu(this.appMenu);

    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url=" + this.appMenu.url);
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
