import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { throttleInterceptor } from './interceptors/Throttle.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuComponent,
    HeaderComponent,
    HttpClientModule,
    FormsModule,
  ],
  providers: [provideHttpClient(withInterceptors([throttleInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
