import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/services/app-menu.service';
import { AppMenu } from 'src/app/models/app-menu.model';

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.css']
})
export class HomePanelComponent implements OnInit {
  appMenu: AppMenu;

  constructor(private appMenuService: AppMenuService) { }

  ngOnInit() {
    this.appMenuService.currentAppMenu$.subscribe(appMenu => this.appMenu = appMenu);
    this.appMenu.id = 0;
    this.appMenu.screenName = "homeScreen";
    this.appMenu.url = "home";
    this.appMenuService.setAppMenu(this.appMenu);
  }

}
