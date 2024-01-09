import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrendingHTTP } from '../core/constants';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private http: HttpClient) {}

  getTrendingCoins() {
    return this.http.get<any>(TrendingHTTP);
  }
}
