import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { coinsByIdHTTP } from '../core/constants';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  getCoinByID(coinId: string) {
    return this.http.get<any>(
      coinsByIdHTTP + coinId
      // {
      // params: {
      //   id: coinId,
      // },
      // }
    );
  }
}
