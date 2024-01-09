import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowParamsService } from '../../services/windowParams.service';
import { Subscription } from 'rxjs';
import { MenuParamsService } from '../../services/menuParams.service';

export interface Icon {
  name: string;
  dark: string;
  white: string;
  active: boolean;
}

export interface Menu {
  Overview: Icon[];
  Account: Icon[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, BrowserAnimationsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1000ms ease-out', style({ opacity: 1 }))]),
      transition(':leave', [animate('0ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class MenuComponent implements OnInit, OnDestroy {
  // injected items
  router = inject(Router);
  windowParamsService = inject(WindowParamsService);
  menuParamsService = inject(MenuParamsService);

  // subscription
  windowWidthSubs: Subscription;

  @Output() onPageChange = new EventEmitter<string>();

  activeRoute: string = 'dashboard';
  menuOpened: boolean = true;

  innerWidth: number = 0;

  ngOnInit(): void {
    this.getWindowInnerwidth();
    this.navigateToDashboard(this.menu.Overview[0]); //dashboard
    this.innerWidth = window.innerWidth;

    if (window.innerWidth < 600) {
      this.menuOpened = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowParamsService.windowWidth.next(event.target.innerWidth);

    if (event.target.innerWidth > 800) {
      this.menuOpened = true;
      this.menuParamsService.menuIsOpen.next(true);
    } else {
      this.menuOpened = false;
      this.menuParamsService.menuIsOpen.next(false);
    }
  }

  getWindowInnerwidth() {
    this.windowWidthSubs = this.windowParamsService.windowWidth.subscribe(
      (width) => {
        this.innerWidth = width;
      }
    );
  }

  navigateToDashboard(icon: Icon) {
    this.router.navigate([icon.name]);
    this.setActive(this.menu.Overview[0]);
  }

  menu: Menu = {
    Overview: [
      {
        name: 'dashboard',
        dark: `../../../assets/icons/dashboard-icon-dark.svg`,
        white: `../../../assets/icons/dashboard-icon-white.svg`,
        active: false,
      },
      {
        name: 'markets',
        dark: `../../../assets/icons/markets-icon-dark.svg`,
        white: `../../../assets/icons/markets-icon-white.svg`,
        active: false,
      },
      {
        name: 'trending',
        dark: `../../../assets/icons/trending-icon-dark.svg`,
        white: `../../../assets/icons/trending-icon-white.svg`,
        active: false,
      },
      {
        name: 'exchange',
        dark: `../../../assets/icons/exchange-icon-dark.svg`,
        white: `../../../assets/icons/exchange-icon-white.svg`,
        active: false,
      },
    ],
    Account: [
      {
        name: 'settings',
        dark: `../../../assets/icons/settings-icon-dark.svg`,
        white: `../../../assets/icons/settings-icon-white.svg`,
        active: false,
      },
    ],
  };

  onMouseEnter(icon: Icon) {
    if (!icon.active) {
      icon.active = true;
    }
  }

  onMouseLeave(icon: Icon) {
    if (icon.active) {
      icon.active = false;
    }
  }

  setActive(icon: Icon): void {
    this.activeRoute = icon.name;
    this.menu.Overview.forEach((item) => (item.active = false));
    this.menu.Account.forEach((item) => (item.active = false));

    icon.active = true;

    this.onPageChange.emit(icon.name);
  }

  onHover(icon: Icon): void {
    icon.active = true;
  }
  onLeave(icon: Icon): void {
    if (icon.name !== this.activeRoute) {
      icon.active = false;
    }
  }

  menuToggle() {
    this.menuOpened = !this.menuOpened;
    this.menuParamsService.menuIsOpen.next(this.menuOpened);
  }

  ngOnDestroy(): void {
    this.windowWidthSubs.unsubscribe();
  }
}
