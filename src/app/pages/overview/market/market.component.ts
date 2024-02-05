import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MarketService } from '../../../services/market.service';
import { Subscription } from 'rxjs';
import { MenuParamsService } from '../../../services/menuParams.service';
import { WindowParamsService } from '../../../services/windowParams.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss',
})
export class MarketComponent implements OnInit, OnDestroy {
  marketService = inject(MarketService);
  menuParamsService = inject(MenuParamsService);
  windowParamsService = inject(WindowParamsService);
  searchService = inject(SearchService);

  marketCoins: any[] = [];
  originalMarketCoins: any[] = [];

  windowWidthSubs: Subscription;
  marketCoinsSubs: Subscription;
  menuIsOpenSubs: Subscription;

  searchWordSubs: Subscription;

  menuIsOpen: boolean = false;
  errorMessage: string = '';
  searchedWord: string = '';

  marketCoinsLoading: boolean = false;
  dashboardViewportWidth: number = 0;

  ngOnInit(): void {
    this.getWindowInnerwidth();
    this.getMarketCoins();
  }
  getMarketCoins() {
    this.marketCoinsLoading = true;
    this.marketService.getMarketCoins().subscribe(
      (res) => {
        this.originalMarketCoins = res;
        this.marketCoins = res;
        console.log(res);
        this.marketCoinsLoading = false;

        this.searchWordSubs = this.searchService.searchedWord.subscribe(
          (el) => {
            this.searchedWord = el;
            this.filterData(el);
          }
        );
      },
      (err) => {
        console.log(err);

        this.errorMessage = err.message;
      }
    );
  }

  filterData(searchedWord: string) {
    if (searchedWord.length === 0) {
      this.marketCoins = this.originalMarketCoins;
    } else {
      this.marketCoins = this.originalMarketCoins.filter((el) => {
        return el?.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
    }
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
    if (this.marketCoinsSubs) this.marketCoinsSubs.unsubscribe();
    if (this.menuIsOpenSubs) this.menuIsOpenSubs.unsubscribe();
    if (this.searchWordSubs) this.searchWordSubs.unsubscribe();
  }
}
