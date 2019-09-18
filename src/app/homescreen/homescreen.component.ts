import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
// import { Menu } from 'primeng/menu';
// import { style } from '@angular/animations';
import { AppMenuService } from '../services/app-menu.service';
import { AppMenu } from '../models/app-menu.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyService } from '../services/company.service';
import { CompanyComponent } from '../components/company/company.component';
import { RecordIdService } from '../services/record-id.service';
// import { currentId } from 'async_hooks';


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
  providers: [AppMenuService]
})
export class HomescreenComponent implements OnInit {

  // @ViewChild(CompanyComponent,{static: false}) CompanyComponent;

  title = 'niche-app Home';
  appMenu: AppMenu;
  currentId: number;

  constructor(
    private appMenuService: AppMenuService,
    private companyService: CompanyService,
    private recordIdService: RecordIdService,
    private router: Router,
    private location: Location) {
    console.log("HomescreenComponent constructor(): called.");
  }

  items: MenuItem[];

  ngOnInit() {
    // this.appMenu = this.appMenuService.getAppMenu();
    console.log("homescreen ngOnInit(): called...");
    this.appMenuService.currentAppMenu$.subscribe(appMenu => this.appMenu = appMenu);
    this.recordIdService.currentRecordId.subscribe(currentId => this.currentId = currentId);
    // this.appMenu.id = 0;
    // this.appMenu.screenName = "homeScreen";
    // this.appMenu.url = "home";
    // this.appMenuService.setAppMenu(this.appMenu);
    // this.appMenuService.currentAppMenu$.subscribe( appMenu => this.appMenu = appMenu);
    this.items = [{
      label: 'Menu', style: "background-color: red",
      items: [
        { label: 'Home', routerLink: "/home", routerLinkActiveOptions: "active" },
        { label: 'Our Company', routerLink: "/ourcompany.component", routerLinkActiveOptions: "active" },
        { label: 'Products', routerLink: "/product.component", routerLinkActiveOptions: "active" },
        { label: 'Company', routerLink: "/company.component", routerLinkActiveOptions: "active" },
        { label: 'Contact Information', routerLink: "/contact.info.component", routerLinkActiveOptions: "active" },
        { label: 'Shipment Information', routerLink: "/shipment.info.component", routerLinkActiveOptions: "active" },
        { label: 'Parent ASINs', routerLink: "/parent.asin.component", routerLinkActiveOptions: "active" },
        { label: 'Competitors To Target', routerLink: "/competitors.to.target.component", routerLinkActiveOptions: "active" },
        { label: 'Checkpoint Criteria', routerLink: "/checkpoint.criteria.component", routerLinkActiveOptions: "active" },
        { label: 'Criteria Yes Nos', routerLink: "/criteria.yes.no.component", routerLinkActiveOptions: "active" },
        // { label: 'Edit Product', routerLink: "/edit.product.component", routerLinkActiveOptions: "active" },
        { label: 'Download', icon: 'pi pi-fw pi-download' }
      ]
    }];
  }

  handleEdit(event: any) {
    console.log("handleEdit(): Called...");
    // this.appMenu = this.appMenuService.getAppMenu();
    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url=" + this.appMenu.url);
    // this.location.back();
    // this.router.navigate(["/product.component"]);
    // this.router.navigate([this.appMenu.url]); // temporary just to test functionality.
    // TODO add logic to determine how to route based on the value of the screenName above.
    // this.router.navigate(["/edit.product.component"]);
    if (this.appMenu.url === '/ourcompany.component') {
      this.router.navigate(["/edit.ourcompany.component"]);
    }
    if (this.appMenu.url === '/product.component') {
      this.router.navigate(["/edit.product.component"]);
    }
    if (this.appMenu.url === '/company.component') {
      console.log("company id=" + this.currentId);
      this.router.navigate(["/edit.company.component"]);
    }
  }

  handleSave(event: any) {
    console.log('handleSave(): Called...')
    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url=" + this.appMenu.url);

    if (this.appMenu.url === '/ourcompany.component') {
      // this.router.navigate(["/edit.ourcompany.component"]);
      console.log("/ourcompany.component");
    }
    if (this.appMenu.url === '/product.component') {
      // this.router.navigate(["/edit.product.component"]);
      console.log("/product.component");
    }
    if (this.appMenu.url === '/company.component') {
      console.log("/company.component");
      console.log("company id=" + this.currentId);
      // this.router.navigate(["/company.component"]);
      // this.companyService.getOne$(this.currentId).subscribe(selectedCompany => {this.selectedCompany = selectedCompany});
      // this.companyService.patch$(this.currentId, company)
    }
    if (this.appMenu.url === '/edit.company.component') {
      console.log("/edit.company.component");
      console.log("company id=" + this.currentId);
      this.companyService.put$(this.currentId, this.appMenu.currentObject).subscribe(selectedCompany => {this.appMenu.currentObject = selectedCompany});

      // this.companyService.patch$(this.companyId, this.company).subscribe((selectedId, selectedCompany) => {
      //           this.selectedCompany = selectedCompany; 
      //           this.selectedId = selectedId;
      //       });
      this.router.navigate(["/company.component"]);
      // this.companyService.getOne$(this.currentId).subscribe(selectedCompany => {this.selectedCompany = selectedCompany});
      // this.companyService.patch$(this.currentId, company)
    }
  }

}
