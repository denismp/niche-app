import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyStore } from 'src/app/stores/company-store';
import { Product } from 'src/app/models/product.model';
import { AppMenu } from 'src/app/models/app-menu.model';
import { AppMenuService } from 'src/app/services/app-menu.service';
import { RecordIdService } from 'src/app/services/record-id.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  appMenu: AppMenu;
  companys: Company[];
  // @Output() recordId = new EventEmitter<number>();
  recordId: number;
  currentId: number;

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
  // @Input() pSelectableRow: Company;

  constructor(
    private companyStore: CompanyStore,
    private appMenuService: AppMenuService,
    private recordIdService: RecordIdService) {
    this.companyStore.init();
  }

  ngOnInit() {
    this.appMenuService.currentAppMenu$.subscribe(appMenu => this.appMenu = appMenu);
    this.recordIdService.currentRecordId.subscribe(currentId => this.currentId = currentId);

    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url" + this.appMenu.url);
    if (this.appMenu.url === '/edit.company.component') {
      console.log("/edit.company.component");
      console.log("company id=" + this.currentId);
     }

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
    console.log("selectedCompany.id=" + this.selectedCompany.id);
    var products: Product[] = company.products;
    for (var i in products) {
      console.log("ID=" + products[i].id)
      console.log("ASIN=" + products[i].asin)
    }
    // this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
    // this.router.navigate(['/home/authors/detail']);
  }

  onRowSelect(event: any) {
    // this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin});
    console.log("onRowSelect(): called...");
    console.log("onRowSelect(): id=" + event.data.id);
    console.log("onRowSelect(): company name=" + event.data.companyName);
    this.appMenu.currentObject = event.data;
    this.appMenuService.setAppMenu(this.appMenu);
    // this.recordId.emit(event.data.id);
    this.recordId = event.data.id;
    this.recordIdService.changeRecordId(this.recordId);
  }
}

