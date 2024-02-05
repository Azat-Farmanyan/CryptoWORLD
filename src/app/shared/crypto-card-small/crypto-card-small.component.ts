import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-crypto-card-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crypto-card-small.component.html',
  styleUrl: './crypto-card-small.component.scss',
})
export class CryptoCardSmallComponent implements OnChanges {
  @Input({
    required: true,
  })
  coinData: any = {};

  @Input({
    required: true,
  })
  isLoading: boolean = true;

  @Input() showGraphic: boolean = false;

  changeIn24h: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.coinData);
    this.changeIn24h =
      this.coinData?.item?.data?.price_change_percentage_24h?.usd ??
      this.coinData?.price_change_percentage_24h;
  }
}
