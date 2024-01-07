import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsModule } from './pages/account/settings/settings.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/overview/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'markets',
    loadChildren: () =>
      import('./pages/overview/market/market.module').then(
        (m) => m.MarketModule
      ),
  },
  {
    path: 'trending',
    loadChildren: () =>
      import('./pages/overview/trending/trending.module').then(
        (m) => m.TrendingModule
      ),
  },
  {
    path: 'exchange',
    loadChildren: () =>
      import('./pages/overview/exchange/exchange.module').then(
        (m) => m.ExchangeModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/account/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
