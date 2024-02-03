import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange.component';
import { UnderConstructionComponent } from '../../../shared/underConstruction/underConstruction.component';

@NgModule({
  declarations: [ExchangeComponent],
  imports: [CommonModule, ExchangeRoutingModule, UnderConstructionComponent],
})
export class ExchangeModule {}
