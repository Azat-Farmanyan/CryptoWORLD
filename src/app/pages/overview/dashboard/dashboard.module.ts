import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CryptoCardSmallComponent } from '../../../shared/crypto-card-small/crypto-card-small.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { NoResultFoundComponent } from '../../../shared/no-result-found/no-result-found.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CryptoCardSmallComponent,
    HttpClientModule,
    LoadingComponent,
    NoResultFoundComponent,
  ],
})
export class DashboardModule {}
