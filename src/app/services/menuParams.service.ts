import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Icon, Menu } from '../shared/menu/menu.component';
import { SearchService } from './search.service';

export interface activeRouteObject {
  activeRoute: string;
  fromMenu: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MenuParamsService {
  menuIsOpen = new BehaviorSubject<boolean>(false);
  searchService = inject(SearchService);

  private activeRouteSubject = new BehaviorSubject<activeRouteObject>({
    activeRoute: '',
    fromMenu: true,
  });

  constructor() {}

  setActiveRoute(route: activeRouteObject): void {
    this.activeRouteSubject.next(route);
  }

  getActiveRoute(): BehaviorSubject<activeRouteObject> {
    return this.activeRouteSubject;
  }
}
