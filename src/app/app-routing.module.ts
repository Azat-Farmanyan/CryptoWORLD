import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'markets',
    loadChildren: () =>
      import('../app/pages/market/market.module').then((m) => m.MarketModule),
  },
  {
    path: 'trending',
    loadChildren: () =>
      import('../app/pages/trending/trending.module').then(
        (m) => m.TrendingModule
      ),
  },
  {
    path: 'exchange',
    loadChildren: () =>
      import('../app/pages/exchange/exchange.module').then(
        (m) => m.ExchangeModule
      ),
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
