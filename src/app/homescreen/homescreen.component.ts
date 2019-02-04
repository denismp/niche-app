import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

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
      label: 'Menu',
      items: [
          {label: 'Home', routerLink: "/home"},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
  }];
  }

}
