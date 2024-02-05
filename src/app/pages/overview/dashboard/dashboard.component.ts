import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CoinsService } from '../../../services/coins.service';
import { Subscription, delay, tap } from 'rxjs';
import { TrendingService } from '../../../services/trending.service';
import { WindowParamsService } from '../../../services/windowParams.service';
import { MenuParamsService } from '../../../services/menuParams.service';
import { Router } from '@angular/router';
import { MarketService } from '../../../services/market.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  trendingService = inject(TrendingService);
  marketService = inject(MarketService);

  windowParamsService = inject(WindowParamsService);
  menuParamsService = inject(MenuParamsService);

  router = inject(Router);

  windowWidthSubs: Subscription;
  menuIsOpenSubs: Subscription;
  trendingCoinsSubs: Subscription;
  marketCoinsSubs: Subscription;

  trendingCoins: any[] = [];
  marketCoins: any[] = [];

  trendingCoinsOriginal: any[] = [];
  marketCoinsOriginal: any[] = [];

  trendCoinsLoading: boolean = false;
  marketCoinsLoading: boolean = false;

  menuIsOpen: boolean = false;

  trendingErrorTxt: string = '';
  marketErrorTxt: string = '';

  dashboardViewportWidth: number = 0;

  numOfItems: number = 6;

  ngOnInit(): void {
    this.getWindowInnerwidth();
    this.getData();
  }

  getData() {
    this.getTrendingCoins();
    this.getMarketCoins();
  }

  setDataByNumOfItems(numOfItems: number) {
    this.trendingCoins = this.trendingCoinsOriginal.slice(0, numOfItems);
    this.marketCoins = this.marketCoinsOriginal.slice(0, numOfItems);
  }

  getTrendingCoins() {
    this.trendCoinsLoading = true;

    this.trendingCoinsSubs = this.trendingService
      .getTrendingCoins(this.numOfItems)

      .subscribe(
        (res) => {
          this.trendingCoins = res;
          this.trendingCoinsOriginal = res;
          console.log(res);

          this.trendCoinsLoading = false;
        },
        (err) => {
          this.trendingErrorTxt = err.message;
        }
      );
  }

  getMarketCoins() {
    this.marketCoinsLoading = true;

    this.marketCoinsSubs = this.marketService
      .getMarketCoins(this.numOfItems)
      .subscribe(
        (res) => {
          this.marketCoins = res;
          this.marketCoinsOriginal = res;
          console.log(res);

          this.marketCoinsLoading = false;
        },
        (err) => {
          this.marketErrorTxt = err.message;
        }
      );
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
      this.numOfItems = 4;
      this.setDataByNumOfItems(this.numOfItems);

      return 'repeat(2, 1fr)';
    } else if (this.dashboardViewportWidth <= 800) {
      this.numOfItems = 3;
      this.setDataByNumOfItems(this.numOfItems);

      return 'repeat(1, 1fr)';
    } else {
      this.numOfItems = 6;
      this.setDataByNumOfItems(this.numOfItems);

      return 'repeat(3, 1fr)';
    }
  }

  ngOnDestroy(): void {
    if (this.menuIsOpenSubs) this.menuIsOpenSubs.unsubscribe();

    if (this.trendingCoinsSubs) this.trendingCoinsSubs.unsubscribe();
    if (this.marketCoinsSubs) this.marketCoinsSubs.unsubscribe();
  }
}
