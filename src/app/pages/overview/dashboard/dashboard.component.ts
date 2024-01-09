import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CoinsService } from '../../../services/coins.service';
import { Subscription, delay } from 'rxjs';
import { TrendingService } from '../../../services/trending.service';
import { WindowParamsService } from '../../../services/windowParams.service';
import { MenuParamsService } from '../../../services/menuParams.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  trendingService = inject(TrendingService);
  windowParamsService = inject(WindowParamsService);
  menuParamsService = inject(MenuParamsService);

  windowWidthSubs: Subscription;
  menuIsOpenSubs: Subscription;

  trendingCoins: any[] = [];
  trendCoinsLoading: boolean = true;
  menuIsOpen: boolean = false;

  dashboardViewportWidth: number = 0;
  // constructor(private DashboardService: ) {}

  ngOnInit(): void {
    this.getWindowInnerwidth();
    this.getTrendingCoins();
  }

  getTrendingCoins() {
    this.trendingService.getTrendingCoins().subscribe((res) => {
      this.trendingCoins = res.coins;

      console.log(res);

      this.trendCoinsLoading = false;
    });
  }

  getWindowInnerwidth() {
    this.menuIsOpenSubs = this.menuParamsService.menuIsOpen.subscribe(
      (menuIsOpenRes) => {
        this.menuIsOpen = menuIsOpenRes;
        console.log('menuIsOpenSubs');

        this.windowWidthSubs = this.windowParamsService.windowWidth.subscribe(
          (widthRes) => {
            if (this.menuIsOpen) {
              console.log('menu is opened');

              this.dashboardViewportWidth = widthRes - 269;
            } else {
              console.log('menu is closed');

              this.dashboardViewportWidth = widthRes - 100;
            }
            console.log('window Width Subs');

            // console.log(this.dashboardViewportWidth, this.menuIsOpen);
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

    // this.windowWidthSubs.unsubscribe();
    this.menuIsOpenSubs.unsubscribe();
  }
}
