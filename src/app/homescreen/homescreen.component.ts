import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
// import { Menu } from 'primeng/menu';
// import { style } from '@angular/animations';
import { AppMenuService } from '../services/app-menu.service';
import { AppMenu } from '../models/app-menu.model';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
  providers: [AppMenuService]
})
export class HomescreenComponent implements OnInit {
  title = 'niche-app Home';
  appMenu: AppMenu;

  constructor(private appMenuService: AppMenuService) { 
    console.log("HomescreenComponent constructor(): called.");
  }

  items: MenuItem[];

  ngOnInit() {
    // this.appMenu = this.appMenuService.getAppMenu();
    console.log("homescreen ngOnInit(): called...");
    this.appMenuService.currentAppMenu$.subscribe(appMenu => this.appMenu = appMenu);
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
        { label: 'Download', icon: 'pi pi-fw pi-download' }
      ]
    }];
  }

  handleEdit() {
    console.log("handleEdit(): Called...");
    // this.appMenu = this.appMenuService.getAppMenu();
    console.log("id=" + this.appMenu.id);
    console.log("screenName=" + this.appMenu.screenName);
    console.log("url=" + this.appMenu.url);
  }

}
