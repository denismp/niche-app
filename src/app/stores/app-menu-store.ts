import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export class AppMenuStore<AppMenu = any> {

    private appMenuSubject: BehaviorSubject<AppMenu>;

    constructor(initialMenu: AppMenu) {
        this.appMenuSubject = new BehaviorSubject(initialMenu);
    }

    public getAppMenu(): Observable<AppMenu> {
        return (this.appMenuSubject.pipe(distinctUntilChanged()));
    }

    public getAppMenuSnapshot(): AppMenu {
        return (this.appMenuSubject.getValue());
    }

    // Move the store to a new appMenu by merging the given partial appMenu into the
    // existing appMenu (creating a new appMenu object)
    public setAppMenu(partialAppMenu: Partial<AppMenu>): void {
        var currentAppMenu = this.getAppMenuSnapshot();
        var nextAppMenu = Object.assign({}, currentAppMenu, partialAppMenu);
        this.appMenuSubject.next(nextAppMenu);
    }
}
