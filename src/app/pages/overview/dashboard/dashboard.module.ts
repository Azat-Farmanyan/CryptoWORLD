import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CryptoCardSmallComponent } from '../../../shared/crypto-card-small/crypto-card-small.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CryptoCardSmallComponent,
    HttpClientModule,
  ],
})
export class DashboardModule {}
