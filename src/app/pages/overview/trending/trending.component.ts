import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TrendingService } from '../../../services/trending.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
})
export class TrendingComponent implements OnInit, OnDestroy {
  trendingService = inject(TrendingService);
  trendCoinsLoading: boolean = true;
  trendingCoins: any[] = [];

  trendingServiceSubs: Subscription;
  ngOnInit(): void {
    this.getTrendingCoins();
  }

  getTrendingCoins() {
    this.trendingServiceSubs = this.trendingService
      .getTrendingCoins()
      .subscribe((res) => {
        console.log(res);

        this.trendingCoins = res;
        this.trendCoinsLoading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.trendingServiceSubs) this.trendingServiceSubs.unsubscribe();
  }
}
