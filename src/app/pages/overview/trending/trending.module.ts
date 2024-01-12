import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingComponent } from './trending.component';
import { TrendingItemComponent } from './trending-item/trending-item.component';

@NgModule({
  declarations: [TrendingComponent],
  imports: [CommonModule, TrendingRoutingModule, TrendingItemComponent],
})
export class TrendingModule {}
