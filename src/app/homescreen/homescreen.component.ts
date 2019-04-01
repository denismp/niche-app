import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { style } from '@angular/animations';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  title = 'niche-app Home';

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'Menu', style: "background-color: red",
      items: [
          {label: 'Home', routerLink: "/home", routerLinkActiveOptions: "active"},
          {label: 'Our Company', routerLink: "/ourcompany.component", routerLinkActiveOptions: "active"},
          {label: 'Products', routerLink: "/product.component", routerLinkActiveOptions: "active"},
          {label: 'Company', routerLink: "/company.component", routerLinkActiveOptions: "active"},
          {label: 'Contact Information', routerLink: "/contact.info.component", routerLinkActiveOptions: "active"},
          {label: 'Shipment Information', routerLink: "/shipment.info.component", routerLinkActiveOptions: "active"},
          {label: 'Parent ASINs', routerLink: "/parent.asin.component", routerLinkActiveOptions: "active"},
          {label: 'Competitors To Target', routerLink: "/competitors.to.target.component", routerLinkActiveOptions: "active"},
          {label: 'Checkpoint Criteria', routerLink: "/checkpoint.criteria.component", routerLinkActiveOptions: "active"},
          {label: 'Criteria Yes Nos', routerLink: "/criteria.yes.no.component", routerLinkActiveOptions: "active"},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
  }];
  }

}
