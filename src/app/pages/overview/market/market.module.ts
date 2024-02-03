import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';
import { CryptoCardSmallComponent } from '../../../shared/crypto-card-small/crypto-card-small.component';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { NoResultFoundComponent } from '../../../shared/no-result-found/no-result-found.component';

@NgModule({
  declarations: [MarketComponent],
  imports: [
    CommonModule,
    MarketRoutingModule,
    CryptoCardSmallComponent,
    LoadingComponent,
    NoResultFoundComponent,
  ],
})
export class MarketModule {}
