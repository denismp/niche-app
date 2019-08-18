import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppMenu } from 'src/app/models/app-menu.model';
import { Company } from 'src/app/models/company.model';
import { CompanyStore } from 'src/app/stores/company-store';
import { AppMenuService } from 'src/app/services/app-menu.service';
import { CompanyService } from 'src/app/services/company.service';
import { RecordIdService } from 'src/app/services/record-id.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  companyForm: FormGroup;
  appMenu: AppMenu;
  // companys: Company[];
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

  // @Input() set company(value: Company) {
  //   if (value) {
  //     this.originalId = value.id;
  //   }
  //   this.selectedCompany = Object.assign({}, value);
  // }

  constructor(
    private companyStore: CompanyStore,
    private appMenuService: AppMenuService,
    private companyService: CompanyService,
    private recordIdService: RecordIdService) {
    this.companyStore.init();
    this.companyForm = new FormGroup({
      'id': new FormControl({ value: this.selectedCompany.id, disabled: true }, Validators.required),
      'companyName': new FormControl({ value: this.selectedCompany.companyName, disabled: false }, Validators.required),
      'email': new FormControl({ value: this.selectedCompany.email, disabled: false }, Validators.required),
      'webSite': new FormControl({ value: this.selectedCompany.webSite, disabled: false }, Validators.required),
      'phone': new FormControl({ value: this.selectedCompany.phone, disabled: false }, Validators.required),
      'notes': new FormControl({ value: this.selectedCompany.notes, disabled: false }, Validators.required)
  });
  }

  ngOnInit() {
    this.appMenuService.currentAppMenu$.subscribe(appMenu => this.appMenu = appMenu);
    this.recordIdService.currentRecordId.subscribe(currentId => this.currentId = currentId);

    console.log("EditCompanyComponent: appMenu.id=" + this.appMenu.id);
    console.log("EditCompanyComponent: appMenu.screenName=" + this.appMenu.screenName);
    console.log("EditCompanyComponent: appMenu.url=" + this.appMenu.url);

    this.appMenu.id = 11;
    this.appMenu.screenName = "editCompanyScreen";
    this.appMenu.url = "/edit.company.component";
    this.appMenuService.setAppMenu(this.appMenu);

    console.log("EditCompanyComponent: appMenu.id=" + this.appMenu.id);
    console.log("EditCompanyComponent: appMenu.screenName=" + this.appMenu.screenName);
    console.log("EditCompanyComponent: appManue.url=" + this.appMenu.url);

    console.log("EditCompanyComponent: currentId=" + this.currentId);

    // this.companyStore.getAll$().subscribe(companys => { this.companys = companys; })

    // TODO retrieve the selectedCompany by the this.currentId from the company service.
    this.companyService.getOne$(this.currentId).subscribe(selectedCompany => {this.selectedCompany = selectedCompany});
  }

}
