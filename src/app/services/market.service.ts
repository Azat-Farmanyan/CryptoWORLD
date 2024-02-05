import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map } from 'rxjs';
import { MarketHTTP } from '../core/constants';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor(private http: HttpClient) {}

  getMarketCoins(numItems?: number) {
    return this.http.get<any>(MarketHTTP).pipe(
      map((res) => {
        return numItems ? res.slice(0, numItems) : res;
      })
    );
  }
}
