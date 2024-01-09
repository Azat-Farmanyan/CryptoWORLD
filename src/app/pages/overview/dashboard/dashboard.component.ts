import { Component, OnInit, inject } from '@angular/core';
import { CoinsService } from '../../../services/coins.service';
import { delay } from 'rxjs';
import { TrendingService } from '../../../services/trending.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  trendingService = inject(TrendingService);

  trendingCoins: any[] = [];
  trendCoinsLoading: boolean = true;

  // constructor(private DashboardService: ) {}

  ngOnInit(): void {
    this.trendingService.getTrendingCoins().subscribe((res) => {
      this.trendingCoins = res.coins;

      console.log(res);

      this.trendCoinsLoading = false;
    });
  }

  getCoinById(id: string) {}
}
