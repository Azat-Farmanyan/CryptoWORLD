import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingComponent } from './trending.component';
import { TrendingItemComponent } from './trending-item/trending-item.component';
import { NoResultFoundComponent } from '../../../shared/no-result-found/no-result-found.component';
import { LoadingComponent } from '../../../shared/loading/loading.component';

@NgModule({
  declarations: [TrendingComponent],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    TrendingItemComponent,
    NoResultFoundComponent,
    LoadingComponent,
  ],
})
export class TrendingModule {}
