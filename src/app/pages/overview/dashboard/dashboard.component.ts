import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CoinsService } from '../../../services/coins.service';
import { Subscription, delay, tap } from 'rxjs';
import { TrendingService } from '../../../services/trending.service';
import { WindowParamsService } from '../../../services/windowParams.service';
import { MenuParamsService } from '../../../services/menuParams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  trendingService = inject(TrendingService);
  windowParamsService = inject(WindowParamsService);
  menuParamsService = inject(MenuParamsService);
  router = inject(Router);

  windowWidthSubs: Subscription;
  menuIsOpenSubs: Subscription;
  trendingCoinsSubs: Subscription;

  trendingCoins: any[] = [];
  trendCoinsLoading: boolean = true;
  menuIsOpen: boolean = false;

  dashboardViewportWidth: number = 0;

  ngOnInit(): void {
    this.getWindowInnerwidth();
    this.getTrendingCoins();
  }

  getTrendingCoins() {
    this.trendingCoinsSubs = this.trendingService
      .getTrendingCoins(3)

      .subscribe((res) => {
        console.log(res);

        this.trendingCoins = res;
        this.trendCoinsLoading = false;
      });
  }

  navigate(path: string) {
    this.router.navigate([path]);
    this.menuParamsService.setActiveRoute({
      activeRoute: path,
      fromMenu: false,
    });
  }

  getWindowInnerwidth() {
    this.menuIsOpenSubs = this.menuParamsService.menuIsOpen.subscribe(
      (menuIsOpenRes) => {
        this.menuIsOpen = menuIsOpenRes;

        this.windowWidthSubs = this.windowParamsService.windowWidth.subscribe(
          (widthRes) => {
            this.menuIsOpen
              ? (this.dashboardViewportWidth = widthRes - 269)
              : (this.dashboardViewportWidth = widthRes - 100);
          }
        );
      }
    );
  }

  getGridColumnStyles(): string {
    if (
      this.dashboardViewportWidth <= 1250 &&
      this.dashboardViewportWidth > 800 //920
    ) {
      return 'repeat(2, 1fr)';
    } else if (this.dashboardViewportWidth <= 800) {
      return 'repeat(1, 1fr)';
    } else {
      return 'repeat(3, 1fr)';
    }
  }

  ngOnDestroy(): void {
    console.log('destroy');

    if (this.menuIsOpenSubs) this.menuIsOpenSubs.unsubscribe();

    if (this.trendingCoinsSubs) this.trendingCoinsSubs.unsubscribe();
  }
}
