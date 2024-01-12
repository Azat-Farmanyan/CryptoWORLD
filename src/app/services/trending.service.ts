import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrendingHTTP } from '../core/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private http: HttpClient) {}

  getTrendingCoins(numItems?: number) {
    return this.http.get<any>(TrendingHTTP).pipe(
      map((res) => {
        console.log(res);

        return numItems ? res.coins.slice(0, numItems) : res.coins;
      })
    );
  }
}
