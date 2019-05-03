import { Injectable } from '@angular/core';
import { AppMenu } from '../models/app-menu.model';
import { AppMenuStore } from '../stores/app-menu-store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {
  private appMenu: AppMenu = {
    id: 0,
    screenName: '',
    url: ''
  }

  private appMenuStore: AppMenuStore = new AppMenuStore<AppMenu>(this.appMenu);

  private appMenuBehaviorSubjectSource = new BehaviorSubject(this.appMenu);

  currentAppMenu$ = this.appMenuBehaviorSubjectSource.asObservable();

  constructor() {
    this.appMenuStore.getAppMenu().subscribe(appMenu => { this.appMenu });
  }

  getAppMenu(): AppMenu {
    // return this.appMenuStore.getAppMenu().subscribe( (value) => { console.log(value.id)});
    return this.appMenuStore.getAppMenuSnapshot();
  }

  setAppMenu(appMenu: AppMenu): void {
    // this.appMenu.id = appMenu.id;
    // this.appMenu.screenName = appMenu.screenName;
    // this.appMenu.url = appMenu.url;
    this.appMenuStore.setAppMenu(appMenu);
  }
}
