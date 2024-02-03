import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TrendingService } from '../../../services/trending.service';
import { Subscription } from 'rxjs';
import { SearchService } from '../../../shared/search-bar/search.service';
import { WindowParamsService } from '../../../services/windowParams.service';
import { MenuParamsService } from '../../../services/menuParams.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
})
export class TrendingComponent implements OnInit, OnDestroy {
  trendingService = inject(TrendingService);
  searchService = inject(SearchService);
  windowParamsService = inject(WindowParamsService);
  MenuParamsService = inject(MenuParamsService);

  trendCoinsLoading: boolean = true;
  trendingCoins: any[] = [];
  originalTrendingCoins: any[] = [];
  contentWidth: number = 0;

  trendingServiceSubs: Subscription;
  searchWordSubs: Subscription;
  contentWidthSubs: Subscription;

  searchedWord = '';
  ngOnInit(): void {
    this.getTrendingCoins();
    this.getContentWidth();
  }

  getTrendingCoins() {
    this.trendingServiceSubs = this.trendingService
      .getTrendingCoins()
      .subscribe((res) => {
        this.originalTrendingCoins = res;
        this.trendingCoins = res;
        this.trendCoinsLoading = false;

        this.searchWordSubs = this.searchService.searchedWord.subscribe(
          (el) => {
            this.searchedWord = el;
            this.filterData(el);
          }
        );
      });
  }

  getContentWidth() {
    this.windowParamsService.contentWidth.subscribe((contentWidth) => {
      console.log(contentWidth);

      this.contentWidth = contentWidth;
    });
  }

  filterData(searchedWord: string) {
    if (searchedWord.length === 0) {
      this.trendingCoins = this.originalTrendingCoins;
    } else {
      this.trendingCoins = this.trendingCoins.filter((el) => {
        return el?.item?.name
          .toLowerCase()
          .includes(searchedWord.toLowerCase());
      });
    }
  }

  ngOnDestroy(): void {
    if (this.trendingServiceSubs) this.trendingServiceSubs.unsubscribe();
    if (this.searchWordSubs) this.searchWordSubs.unsubscribe();
  }
}
