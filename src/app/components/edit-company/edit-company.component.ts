import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  // @Input() set company(value: Company) {
  //   if (value) {
  //     this.originalId = value.id;
  //   }
  //   this.selectedCompany = Object.assign({}, value);
  // }

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

  constructor(
    private fb: FormBuilder,
    private companyStore: CompanyStore,
    private appMenuService: AppMenuService,
    // private companyService: CompanyService,

    private recordIdService: RecordIdService) {
    this.companyStore.init();
    //   this.companyForm = new FormGroup({
    //     'id': new FormControl({ value: this.selectedCompany.id, disabled: true }, Validators.required),
    //     'companyName': new FormControl({ value: this.selectedCompany.companyName, disabled: false }, Validators.required),
    //     'email': new FormControl({ value: this.selectedCompany.email, disabled: false }, Validators.required),
    //     'webSite': new FormControl({ value: this.selectedCompany.webSite, disabled: false }, Validators.required),
    //     'phone': new FormControl({ value: this.selectedCompany.phone, disabled: false }, Validators.required),
    //     'notes': new FormControl({ value: this.selectedCompany.notes, disabled: false }, Validators.required)
    // });
    this.createForm();
  }

  createForm() {
    this.companyForm = this.fb.group({
      id: [{ value: this.selectedCompany.id, disabled: true }, Validators.required],
      companyName: [{ value: this.selectedCompany.companyName, disabled: false }, Validators.required],
      email: [{ value: this.selectedCompany.email, disabled: false }, Validators.required],
      webSite: [{ value: this.selectedCompany.webSite, disabled: false }, Validators.required],
      phone: [{ value: this.selectedCompany.phone, disabled: false }, Validators.required],
      notes: [{ value: this.selectedCompany.notes, disabled: false }, Validators.required],
    });
  }

  ngOnInit() {
    this.appMenuService.currentAppMenu$.subscribe(appMenu => this.appMenu = appMenu);
    this.recordIdService.currentRecordId.subscribe(currentId => this.currentId = currentId);

    console.log("EditCompanyComponent: appMenu.id=" + this.appMenu.id);
    console.log("EditCompanyComponent: appMenu.screenName=" + this.appMenu.screenName);
    console.log("EditCompanyComponent: appMenu.url=" + this.appMenu.url);

    // this.companyService.getOne$(this.currentId).subscribe(selectedCompany => {this.selectedCompany = selectedCompany});
    this.selectedCompany = this.appMenu.currentObject;

    this.appMenu.id = 11;
    this.appMenu.screenName = "editCompanyScreen";
    this.appMenu.url = "/edit.company.component";
    // this.appMenu.currentObject = this.selectedCompany;
    this.appMenuService.setAppMenu(this.appMenu);

    console.log("EditCompanyComponent: appMenu.id=" + this.appMenu.id);
    console.log("EditCompanyComponent: appMenu.screenName=" + this.appMenu.screenName);
    console.log("EditCompanyComponent: appManue.url=" + this.appMenu.url);

    console.log("EditCompanyComponent: currentId=" + this.currentId);

    // TODO save the data if needed.
    // this.companyStore.getAll$().subscribe(companys => { this.companys = companys; })
    // this.companyService.patch$(this.selectedCompany.id, this.selectedCompany).subscribe(selectedCompany => {this.selectedCompany = selectedCompany});

    // TODO retrieve the selectedCompany by the this.currentId from the company service.
    // this.companyService.getOne$(this.currentId).subscribe(selectedCompany => {this.selectedCompany = selectedCompany});
  }

  onSubmit(value: any): void {
    console.log("onSubmit(): called...");
    this.getFormData(value);
  }
  getFormData(value: any): void {
    this.appMenu.currentObject.email = value.email !== '' ? value.email : this.appMenu.currentObject.email;
    this.appMenu.currentObject.companyName = value.companyName !== '' ? value.companyName : this.appMenu.currentObject.companyName;
    this.appMenu.currentObject.webSite = value.webSite !== '' ? value.webSite : this.appMenu.currentObject.webSite;
    this.appMenu.currentObject.phone = value.phone !== '' ? value.phone : this.appMenu.currentObject.phone;
    this.appMenu.currentObject.notes = value.notes !== '' ? value.notes : this.appMenu.currentObject.notes;
  }

}
