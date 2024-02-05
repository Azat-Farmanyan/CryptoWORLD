import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestThrottleService {
  private lastRequestTime: number = 0;
  constructor() {}
  canMakeRequest(): boolean {
    const currentTime = Date.now();
    const timeDifference = currentTime - this.lastRequestTime;
    if (timeDifference > 1000) {
      // Позволяет 1 запрос в 2 секунды
      this.lastRequestTime = currentTime;
      return true;
    } else {
      console.log('Запрет');
      return false;
    }
  }
}
